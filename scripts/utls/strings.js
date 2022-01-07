exports.toCamelCase = (dashedName) => {
    return dashedName.replace(/-([a-z])/g, (_, letter) => {
        letter.toUpperCase()
    })
}

exports.prettyJson = (obj) => {
    return JSON.stringify(obj, null, 4)
}

exports.toLower = (str) => {
    return str.trim().toLowerCase()
}

exports.toCapitalize = (str) => {
    return str.replace(/^[A-Z|a-z]/g, (letter) => letter.toUpperCase())
}