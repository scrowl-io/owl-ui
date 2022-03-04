import { execSync as exec } from 'child_process'
import fs from '../utls/file-system.js'
import locations from '../utls/locations.js'
import strs from '../utls/strings.js'
import { compile } from './templater.js'

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
    const types = fs.getFile('typings/package.json')

    exec(`lerna add ${types.name} --scope=@owlui/components`)

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