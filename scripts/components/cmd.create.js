const argv = require('yargs-parser')(process.argv.slice(2))
const strs = require('../utls/strings')
const { print, clear } = require('../utls/console')
const fs = require('../utls/file-system')
const { compile, definePaths } = require('./templater')
const tempOption = require('./create-option')

function createBoilerplate(component) {

    function packagePath(template, filename) {
        return definePaths(template, 'package', filename, folders.base)
    }

    function sourcePath(template, filename) {
        return definePaths(template, 'source', filename, folders.src)
    }

    const folders = {
            base: `packages/${component.name}`
        }

    folders.src = `${folders.base}/src`
    
    const fileList = {
            package: packagePath('package', 'package.json'),
            license: packagePath('license', 'LICENSE'),
            npmignore: packagePath('npmignore', '.npmignore'),
            readme: packagePath('readme', 'README.md'),
            tsconfig: packagePath('tsconfig', 'tsconfig.json'),
            postcss: packagePath('postcss', 'postcssrc.json'),
            index: sourcePath('index', 'index.ts'),
            styles: sourcePath('styles', 'index.scss')
        }
    
    for (let filename in fileList) {
        fileList[filename].contents = compile(fileList[filename].template, component)
        fs.setFile(fileList[filename].path, fileList[filename].contents)
    }

    tempOption.create(component, folders)
}

function getParts(component) {
    const parts = component.split('@')
    const option = 'default'

    if (!parts.length) {
        throw Error('Component name missing')
    }

    const name = strs.toLower(parts[0])

    if (!parts[1]) {
        throw Error('Component abbreviation missing: [name]@[abv]')
    }

    const abv = strs.toLower(parts[1])

    return {
        name: name,
        cap: strs.toCapitalize(name),
        abv: abv,
        abvCap: strs.toCapitalize(abv),
        option: option,
        optionCap: strs.toCapitalize(option)
    }
}

function processArgs() {
    const components = []
    
    try {
        if (argv.hasOwnProperty('n')) {
            components.push(getParts(argv.n))
        }
    
        if (argv.hasOwnProperty('m')) {
            const many = argv.m.split(',')
    
            components = components.concat(many.map(getParts))
        }
    
        if (components.length === 0) {
            throw Error(`No component names submitted \n Use flag -n with a non-spaced string to create a single component \n Use flag -m with comma separated non-spaced string to create multiple components`)
        }
    
        components.forEach(createBoilerplate)
    } catch (err) {
        print(err, 'error')
        process.exit(1)
    }
}

clear()
processArgs()