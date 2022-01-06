const fs = require('fs')
const path = require('path')
const exec = require('child_process').execSync;

const filename = '[id]/dist/owl.[name].js'

module.exports = {
    filename: filename,
    get: () => {
        const packages = JSON.parse(
            exec('yarn workspaces info --json')
                .toString()
        )
    
        const entries = {}
    
        for (let pkg in packages) {
            const pkgDef = JSON.parse(
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
                const filepath = path.join(
                    '.',
                    packages[pkg].location,
                    pkgDef.module.replace(/js$/, 'ts')
                )
                
                entries[packages[pkg].location.replace('packages/', '')] = {
                    import: './' + filepath,
                    filename: filename
                }
            }
        }
        
        return entries
    }
};