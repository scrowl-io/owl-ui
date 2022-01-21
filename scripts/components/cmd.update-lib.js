const exec = require('child_process').execSync
const fs = require('../utls/file-system')
const locations = require('../utls/locations')
const strs = require('../utls/strings');
const { compile } = require('./templater')

function update() {
    const pkgs = locations.entries()
    const names = []
    const template = fs.getFile(`scripts/components/templates/lib/index.hbs`)
    const dest = 'packages/components/src/index.ts'
    const config  = fs.getFile('packages/components/package.json')
    const deps = config.dependencies

    for (let pkg in pkgs) {
        
        if (pkg !== 'components') {
            const component = `@owlui/${pkg}`

            if (pkg !== 'theme') {
                names.push({
                    name: pkg,
                    cap: strs.toCapitalize(pkg),
                    pkg: component
                })
            }

            exec(`lerna add ${component} --scope=@owlui/components`)
        }
    }
    
    const contents = compile(template, { components: names.sort() })
    fs.setFile(dest, contents)

}

update()