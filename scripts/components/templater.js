const engine = require('handlebars')
const beautify = require('js-beautify')
const fs = require('../utls/file-system')
const { print } = require('../utls/console')

engine.registerHelper('raw', (options) => {
    return options.fn()
})

exports.compile = (contents, data) => {
    
    try {
        return engine.compile(contents)(data)
    } catch (err) {
        print(err, 'error')
        process.exit(1)
    }
}

exports.pretty = (contents) => {

    try {
        return beautify(contents)
    } catch (err) {
        print(err, 'error')
        process.exit(1)
    }
}

exports.definePaths = (template, templateFolder, filename, fileFolder) => {
    
    function setFilePath(filename, folder) {
        return `${folder}/${filename}`
    }

    function getTemplateFile(filename, folder) {
        folder = folder || 'option'

        try {
            return fs.getFile(`scripts/components/templates/${folder}/${filename}.hbs`)
        } catch (err) {
            print(err, 'error')
            process.exit(1)
        }
    }

    return {
        template: getTemplateFile(template, templateFolder),
        path: setFilePath(filename, fileFolder)
    }
}