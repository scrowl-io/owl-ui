const exec = require('child_process').execSync
const locations = require('../utls/locations')
const fs = require('../utls/file-system')

function run(folder, entry) {
    console.log(`building: ${folder}, ${entry}`)
    exec(`cd ${folder} && parcel build ${entry}`)
}

function build() {
    const pkgs = locations.entries()
    
    for (let pkg in pkgs) {
        const pkgFolder = fs.normalize(`packages/${pkg}`)
        const pkgEntry = pkgs[pkg].entry 
        
        run(pkgFolder, pkgEntry)
    }

    console.log(`\n`)
}

build()