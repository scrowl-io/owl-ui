import colors from 'colors'
import strs from './strings.js'

const clrTheme = {
    input: 'grey',
    verbose: 'cyan',
    prompt: 'white',
    success: 'green',
    data: 'grey',
    help: 'blue',
    warn: 'brightYellow',
    debug: 'brightMagenta',
    error: 'red',
    info: 'brightMagenta'
}

colors.setTheme(clrTheme)

export const print = (msg, clr) => {
    clr = clr || 'data'

    const printable = (typeof msg === 'string' || typeof msg === 'number' || typeof msg === 'boolean') ? msg : (
        (msg instanceof Error) ? msg.message + '\n' + msg.stack :
        strs.prettyJson(msg)
    )

    if (!clrTheme.hasOwnProperty(clr)) {
        console.warn(`color not supported: ${clr}`.warn)
        clr = 'data'
    }

    console.log(`[${clr.toUpperCase()}] ${printable}`[clr])
}

export const clear = () => {
    process.stdout.write('\x1b[2J')
}

export default {
  print,
  clear
}