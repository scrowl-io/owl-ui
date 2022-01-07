const engine = require('handlebars')
const beautify = require('js-beautify')
const { print } = require('../utls/console')

engine.registerHelper('raw', (options) => {
    return options.fn()
})

exports.compile = (contents, data) => {
    
    try {
        return engine.compile(contents)(data)
    } catch (err) {
        console.log(err.stack)
        return
    }
}

exports.pretty = (contents) => {
    return beautify(contents)
}