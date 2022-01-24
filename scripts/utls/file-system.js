const fs = require('fs-extra')
const path = require('path')
const strs = require('./strings')
const { print } = require('./console')

fs.join = (...paths) => {
    return path.join.apply(null, paths)
}

fs.resolve = (...paths) => {
    return path.resolve.apply(null, paths)
}

fs.normalize = (pathName) => {
    return path.normalize(
        path.join(
            process.cwd(),
            pathName
        )
    )
}

fs.dirExists = (pathName) => {
    
    try {
        return fs.existsSync(fs.normalize(pathName))
    } catch (err) {
        print(err, 'error')
        return err
    }
}

fs.getStats = (pathName) => {

    try {
        return fs.statSync(fs.normalize(pathName))
    } catch (err) {
        print(err, 'error')
        return err
    }
}

fs.dirList = (pathName) => {

    try {
        const dirPaths = fs.readdirSync(fs.normalize(pathName))

        return dirPaths.filter((url) => {
            return fs.getStats(`${pathName}/${url}`).isDirectory()
        })
    } catch (err) {
        print(err, 'error')
        return err
    }
}

fs.getFile = (pathName, media) => {
    const filename = fs.normalize(pathName)

    try {

        if (!fs.pathExistsSync(filename)) {
            print(`file does not exist: ${filename}`, 'warn')
            return
        }
    } catch (err) {
        print(err.message, 'error')
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
        print(err.message, 'error')
        return
    }
}

fs.setFile = (pathName, contents) => {
    const filename = fs.normalize(pathName)

    try {

        if (/.json$/.test(pathName) && typeof contents !== 'string') {
            contents = strs.prettyJson(JSON.parse(contents))
        }

        fs.outputFileSync(filename, contents)
    } catch (err) {
        print(err.message, 'error')
        return
    }
}

Object.assign(exports, fs)