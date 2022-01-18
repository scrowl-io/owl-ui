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

function getEntries() {
    const entries = {}
    const packages = getPackagePaths()

    packages.forEach((pkgPath) => {
        const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'))
        const entry = pkg.source ? pkg.source : (pkg.sass ? pkg.sass : undefined)

        if (entry) {
            entries[pkg.name.replace('@owlui/', '')] = {
                entry: entry,
                filename: filename,
                path: pkgPath
            }
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