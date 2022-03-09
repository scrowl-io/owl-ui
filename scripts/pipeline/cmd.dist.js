import { execSync as exec } from 'child_process'
import fs from '../utls/file-system.js'
import locations from '../utls/locations.js'
import fixes from '../node-module-fixes/module-fixes.js'

const logLevel = '--log-level warn'

function build(entry) {
    console.log(`building: ${entry}`)
    exec(`parcel build ${entry} ${logLevel}`)
}

function buildTargets(pkg, entries) {
    entries.forEach((entry) => {
        console.log(`building: ${pkg} ${entry}`)
        
        let target

        if (fs.getExt(entry)) {
            target = `${pkg}/${entry} --dist-dir ${pkg}/dist`
        } else {
            target = `${pkg} --target ${entry}`
        }
        
        exec(`parcel build ${target} ${logLevel}`)
    })
}

function preBuild(name, config) {
    const pkg = fs.normalize(`packages/${name}`)

    const dist = `packages/${name}/dist`
    fs.removeSync(dist)

    if (config.entries instanceof Array) {
        buildTargets(pkg, config.entries)
    } else {
        build(pkg)
    }
}

function postBuild(files) {
    
    function getDistPath(pkg, filename) {
        return `packages/${pkg}/dist/${filename}`
    }

    function replaceMapNames(path, lookup, replacer) {
        const contents = fs.getFile(path)

        return contents.replace(new RegExp(lookup, 'g'), () => {
            return replacer
        })
    }

    files.forEach((file) => {
        const buildName = file.source.replace('src/', '').replace('.scss', '.css')
        const buildPath = getDistPath(file.package, buildName)
        const buildMapName = buildName + '.map';
        const buildMapPath = buildPath + '.map';
        const distName = file.dist.replace('dist/', '')
        const distPath = getDistPath(file.package, file.dist.replace('dist/', ''))
        const distMapName = distName + '.map'
        const distMapPath = distPath + '.map'

        fs.renameFile(buildPath, distPath)
        fs.renameFile(buildMapPath, distMapPath)

        const buildContents = replaceMapNames(distPath, buildMapName, distMapName)
        const mapContents = replaceMapNames(distMapPath, buildMapName, distMapName)

        fs.setFile(distPath, buildContents)
        fs.setFile(distMapPath, mapContents)
    })
}

function process() {
    const pkgs = locations.entries()
    const componentsPkg = 'components'
    const themePkg = 'theme'

    fs.removeSync('.parcel-cache')
    fixes.apply()
    
    for (let pkg in pkgs) {

        if (pkg !== componentsPkg) {
            preBuild(pkg, pkgs[pkg])
        }
    }

    preBuild(componentsPkg, pkgs[componentsPkg])
    postBuild([
        {
            package: themePkg,
            source: pkgs[themePkg].config.source,
            dist: pkgs[themePkg].config.style
        },
        {
            package: componentsPkg,
            source: pkgs[componentsPkg].config.targets.style.source,
            dist: pkgs[componentsPkg].config.style
        }
    ])
    console.log(`\n`)
}

process()