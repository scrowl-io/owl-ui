function toCamelCase(dashedName) {
    return dashedName.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

function prettyJson(obj) {
    return JSON.stringify(obj, null, 4)
}

function outJson(obj) {
    console.log(prettyJson(obj))
}

module.exports = {
    toCamelCase: toCamelCase,
    prettyJson: prettyJson,
    outJson: outJson
}