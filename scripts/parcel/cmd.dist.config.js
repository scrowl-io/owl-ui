const exec = require('child_process').execSync;
const locations = require('../utls/locations')

function run(pkgPath) {
    console.log(`${pkgPath}`)
    exec(`cd ${pkgPath} && yarn parcel build`)
}

function build() {
    const pkgs = locations.entries()
    
    for (let pkg in pkgs) {
        const pkgPath = `./packages/${pkg}`

        run(pkgPath)
    }

    console.log(`\n`)
}

build()