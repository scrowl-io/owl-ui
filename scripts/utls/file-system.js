const fs = require('fs-extra')
const path = require('path')
const strs = require('./strings')
const { print } = require('./console')

fs.normalize = (pathName) => {
    return path.normalize(
        path.join(
            process.cwd(),
            pathName
        )
    )
}

fs.getFile = (pathName, media) => {
    const filename = fs.normalize(pathName)

    try {

        if (!fs.pathExistsSync(filename)) {
            print(`file does not exist: ${filename}`, 'warn')
            return
        }
    } catch (err) {
        print(err.stack, 'error')
        return
    }

    if (media === undefined || media === null) {
        media = 'utf8'
    }

    try {
        let file

        file = fs.readFileSync(filename, media)

        if (/.json$/.test(filename)) {
            return JSON.parse(file)
        } else {
            return file
        }
    } catch (err) {
        print(err.stack, 'error')
        return
    }
}

fs.setFile = (pathName, contents) => {
    const filename = fs.normalize(pathName)

    try {

        if (/.json$/.test(pathName)) {
            contents = strs.prettyJson(JSON.parse(contents))
        }

        fs.outputFileSync(filename, contents)
    } catch {
        print(err.stack, 'error')
        return
    }
}

Object.assign(exports, fs)