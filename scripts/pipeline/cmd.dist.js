const exec = require('child_process').execSync
const fs = require('../utls/file-system')
const locations = require('../utls/locations')
const fixes = require('../node-module-fixes/module-fixes')

function build(entry) {
    const self = this
    console.log(`building: ${self.folder}, ${entry}`)
    
    exec(`cd ${self.folder} && yarn parcel build ${entry} --log-level warn`)
}

function process() {
    const pkgs = locations.entries()

    fs.removeSync('.parcel-cache')
    fixes.apply()
    
    for (let pkg in pkgs) {
        const pkgFolder = fs.normalize(`packages/${pkg}`)
        const pkgEntries = pkgs[pkg].entries
        const pkgDist = `packages/${pkg}/dist`

        fs.removeSync(pkgDist)
        pkgEntries.forEach.apply(pkgEntries, [build, { folder: pkgFolder }])
    }

    console.log(`\n`)
}

process()