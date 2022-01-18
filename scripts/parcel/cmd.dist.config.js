const exec = require('child_process').execSync
const fs = require('../utls/file-system')
const locations = require('../utls/locations')
const fixes = require('../node-module-fixes/module-fixes')

function run(folder, entry) {
    console.log(`building: ${folder}, ${entry}`)
    // exec(`cd ${folder} && yarn parcel build ${entry} --log-level verbose`)
    exec(`cd ${folder} && yarn parcel build ${entry}`)
}

function build() {
    const pkgs = locations.entries()

    fs.removeSync('.parcel-cache')
    fixes.apply()
    
    for (let pkg in pkgs) {
        const pkgFolder = fs.normalize(`packages/${pkg}`)
        const pkgEntry = pkgs[pkg].entry
        const pkgDist = `packages/${pkg}/dist`
        
        fs.removeSync(pkgDist)
        run(pkgFolder, pkgEntry)
    }

    console.log(`\n`)
}

build()