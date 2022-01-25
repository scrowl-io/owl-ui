const exec = require('child_process').execSync
const fs = require('../utls/file-system')
const locations = require('../utls/locations')
const strs = require('../utls/strings');
const { compile } = require('./templater')

function setDest(filename) {
    return `packages/components/src/${filename}`
}

function update() {
    const pkgs = locations.entries()
    const data = {
        components: []
    }
    const templates = {
        lib: {
            file: fs.getFile(`scripts/components/templates/lib/index.hbs`),
            dest: setDest('index.ts')
        },
        style: {
            file: fs.getFile(`scripts/components/templates/lib/style.hbs`),
            dest: setDest('_index.scss')
        },
    }

    for (let pkg in pkgs) {
        
        if (pkg !== 'components') {
            const component = `@owlui/${pkg}`

            if (pkg !== 'theme') {
                data.components.push({
                    name: pkg,
                    cap: strs.toCapitalize(pkg),
                    pkg: component
                })
            }

            exec(`lerna add ${component} --scope=@owlui/components`)
        }
    }
    
    data.components = data.components.sort()

    for (let temp in templates) {
        const contents = compile(templates[temp].file, data)
        
        fs.setFile(templates[temp].dest, contents)
    }
}

update()