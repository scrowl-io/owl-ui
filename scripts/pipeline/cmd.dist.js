const exec = require('child_process').execSync
const fs = require('../utls/file-system')
const locations = require('../utls/locations')
const fixes = require('../node-module-fixes/module-fixes')

function build(entry) {
    const self = this
    console.log(`building: ${self.folder}, ${entry}`)
    
    exec(`cd ${self.folder} && yarn parcel build ${entry} --log-level warn`)
}

function prebuild(name, config) {
    const folder = fs.normalize(`packages/${name}`)
    const entries = config.entries
    const dist = `packages/${name}/dist`

    fs.removeSync(dist)
    entries.forEach.apply(entries, [build, { folder: folder }])
}

function process() {
    const pkgs = locations.entries()
    const componentsPkg = 'components'

    fs.removeSync('.parcel-cache')
    fixes.apply()
    
    for (let pkg in pkgs) {

        if (pkg !== componentsPkg) {
            prebuild(pkg, pkgs[pkg])
        }
    }

    prebuild(componentsPkg, pkgs[componentsPkg])
    console.log(`\n`)
}

process()