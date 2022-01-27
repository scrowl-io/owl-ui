const fs = require('fs')
const path = require('path')
const exec = require('child_process').execSync;
const { print } = require('./console')

const filename = '[id]/dist/owl.[name].js'

function getPackagePaths() {
    const pkgPaths = []
    const pkgs = JSON.parse(
        exec('yarn workspaces info --json')
            .toString()
    )

    for (let pkg in pkgs) {

        if (/packages\//.test(pkgs[pkg].location)) {
            const pkgPath = path.join(
                __dirname,
                '../..',
                pkgs[pkg].location,
                'package.json'
            )
            pkgPaths.push(pkgPath)
        }
    }

    return pkgPaths
}

function setTargets(entry, pkg) {
    entry.entries = []
    entry.dists = []

    for (let target in pkg.targets) {

        if (target === 'style') {
            entry.entries.push(pkg.targets[target].source)
        } else {
            entry.entries.push(target)
        }

        entry.dists.push(pkg[target])
    }
}

function getEntries() {
    const entries = {}
    const packages = getPackagePaths()
    const libPrefix = '@owlui/'

    packages.forEach((pkgPath) => {
        const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'))
        const name = pkg.name.replace(libPrefix, '')

        entries[name] = {
            path: pkgPath,
            config: pkg
        }

        if (pkg.source) {
            entries[name].entries = pkg.source
            entries[name].dists = pkg.main
        } else if (pkg.targets) {
            setTargets(entries[name], pkg)
        } else {
            print('[WARN] Package not defined correctly: skipping', 'warn')
            print(pkg)
        }
    })
    
    return entries
}

module.exports = {
    filename: filename,
    packagePaths: getPackagePaths,
    entries: getEntries
};