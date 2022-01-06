const fs = require('fs')
const path = require('path')
const exec = require('child_process').execSync;

module.exports = {
    get: () => {
        const packages = JSON.parse(
            exec('yarn workspaces info --json')
                .toString()
        )
    
        const entries = {}
    
        for (let pkg in packages) {
            let pkgDef = JSON.parse(
                            fs.readFileSync(
                                path.join(
                                    __dirname,
                                    '../..',
                                    packages[pkg].location,
                                    'package.json'
                                ),
                                'utf8'
                            )
                        )

            if (pkgDef.module) {
                entries[packages[pkg].location.replace('packages/', '')] = path.join(
                    '.',
                    packages[pkg].location,
                    pkgDef.module.replace(/js$/, 'ts')
                )
            }
        }
    
        return entries
    }
};