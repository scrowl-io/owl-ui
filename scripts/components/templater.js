import engine from 'handlebars'
import beautify from 'js-beautify'
import fs from '../utls/file-system.js'
import { print } from '../utls/console.js'

engine.registerHelper('raw', (options) => {
    return options.fn()
})

export const compile = (contents, data) => {
    
    try {
        return engine.compile(contents)(data)
    } catch (err) {
        print(err, 'error')
        process.exit(1)
    }
}

export const pretty = (contents) => {

    try {
        return beautify(contents)
    } catch (err) {
        print(err, 'error')
        process.exit(1)
    }
}

export const definePaths = (template, templateFolder, filename, fileFolder) => {
    
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

export default {
  compile,
  pretty,
  definePaths
}