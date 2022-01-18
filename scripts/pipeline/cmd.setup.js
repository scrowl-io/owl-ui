const fs = require('../utls/file-system')

const fileMap = {
    'design/owl-ui/dist/styledictionary/scss/variables.scss': 'packages/theme/src/globals/variables.scss'
}

function copy() {

    for (let file in fileMap) {
        const contents = fs.getFile(file)
        const dest = fileMap[file]
        
        fs.setFile(dest, contents)
    }
}

copy()