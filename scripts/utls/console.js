const colors = require('colors')
const strs = require('./strings')

const clrTheme = {
    input: 'grey',
    verbose: 'cyan',
    prompt: 'white',
    success: 'green',
    data: 'grey',
    help: 'blue',
    warn: 'brightYellow',
    debug: 'brightMagenta',
    error: 'error',
    info: 'brightMagenta'
}

colors.setTheme(clrTheme)

exports.print = (msg, clr) => {
    clr = clr || 'data'

    const printable = (typeof msg !== 'string') ? strs.prettyJson(msg) : msg

    if (!clrTheme.hasOwnProperty(clr)) {
        console.warn(`color not supported: ${clr}`.warn)
        clr = 'data'
    }

    console.log(`[${clr.toUpperCase()}] ${printable}`[clr])
}

exports.clear = () => {
    process.stdout.write('\x1b[2J')
}