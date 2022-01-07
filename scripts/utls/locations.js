const fs = require('fs')
const path = require('path')
const exec = require('child_process').execSync;
const strs = require('./strings')

const filename = '[id]/dist/owl.[name].js'

function getPackagePaths() {
    const pkgPaths = []
    const pkgs = JSON.parse(
        exec('yarn workspaces info --json')
            .toString()
    )

    for (let pkg in pkgs) {

        if (pkgs[pkg].location.indexOf('packages/') !== -1) {
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

function getEntries() {
    const entries = {}
    const packages = getPackagePaths()

    packages.forEach((pkgPath) => {
        const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'))

        if (pkg.source && pkg.repository && pkg.repository.directory) {
            const filepath = path.join(
                './',
                pkg.repository.directory,
                pkg.source
            )
            
            entries[pkg.name.replace('@owlui/', '')] = {
                import: './' + filepath,
                filename: filename,
                path: pkgPath
            }
        } else {
            console.warn('[WARN] Package not defined correctly: skipping')
            strs.outJson(pkg)
        }
    })
    
    return entries
}

module.exports = {
    filename: filename,
    packagePaths: getPackagePaths,
    entries: getEntries
};