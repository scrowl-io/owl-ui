const fs = require('../utls/file-system')

const moduleMap = {
    '@parcel/transformer-sass/lib.js': '@parcel/transformer-sass/lib/SassTransformer.js'
}

exports.apply = () => {

    for (let fix in moduleMap) {
        const fixPath = fs.join('scripts', 'node-module-fixes', fix)
        const contents = fs.getFile(fixPath)
        const modulePath = fs.join('node_modules', moduleMap[fix])
        
        fs.setFile(modulePath, contents)
    }
}