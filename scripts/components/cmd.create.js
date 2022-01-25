const argv = require('yargs-parser')(process.argv.slice(2))
const strs = require('../utls/strings')
const { print, clear } = require('../utls/console')
const fs = require('../utls/file-system')
const { compile, definePaths } = require('./templater')
const tempOption = require('./create-option')

function createFolderMap(component) {
    const folders = {
        base: `packages/${component.name}`
    }

    folders.src = `${folders.base}/src`

    return folders
}

function updateSource(folders, component) {

    function sourcePath(template, filename) {
        return definePaths(template, 'source', filename, folders.src)
    }

    const options = fs.dirList(folders.src)
    const fileList = {
        index: sourcePath('index', 'index.ts'),
        styles: sourcePath('styles', '_index.scss')
    }

    component.options = options.sort().map((opt) => {
        return {
            name: strs.toLower(opt),
            cap: strs.toCapitalize(opt)
        }
    })
    
    for (let filename in fileList) {
        fileList[filename].contents = compile(fileList[filename].template, component)
        fs.setFile(fileList[filename].path, fileList[filename].contents)
    }
}

function addOption(component) {
    const folders = createFolderMap(component)

    tempOption.create(component, folders)
    updateSource(folders, component)
}

function createBoilerplate(component) {

    function packagePath(template, filename) {
        return definePaths(template, 'package', filename, folders.base)
    }

    const folders = createFolderMap(component)
    const fileList = {
            package: packagePath('package', 'package.json'),
            license: packagePath('license', 'LICENSE'),
            npmignore: packagePath('npmignore', '.npmignore'),
            readme: packagePath('readme', 'README.md'),
            tsconfig: packagePath('tsconfig', 'tsconfig.json'),
            postcss: packagePath('postcss', 'postcssrc.json')
        }
    
    for (let filename in fileList) {
        fileList[filename].contents = compile(fileList[filename].template, component)
        fs.setFile(fileList[filename].path, fileList[filename].contents)
    }

    addOption(component)
}

function getParts(component, getOpt) {
    getOpt = getOpt || false
    const parts = component.split('@')

    if (!parts.length) {
        throw Error('Component name missing')
    }

    const name = strs.toLower(parts[0])

    if (getOpt && !parts[1]) {
        throw Error('Component option missing: [name]@[option]')
    }

    const option = getOpt || parts[1] ? parts[1] : 'default'

    return {
        name: name,
        cap: strs.toCapitalize(name),
        option: option,
        optionCap: strs.toCapitalize(option)
    }
}

function componentExists(component) {
    const folders = createFolderMap(component)

    return fs.dirExists(folders.base)
}

function optionExists(component) {
    const folders = createFolderMap(component)

    return fs.dirExists(`${folders.src}/${component.optionCap}`)
}

function processArgs() {
    const components = []
    
    try {
        
        if (argv.hasOwnProperty('o')) {
            // create an option for an existing component
            let component = getParts(argv.o, true)
            
            if (!componentExists(component)) {
                print('Component does not exist: creating it', 'warn')
                createBoilerplate(component)
            } else {

                if (optionExists(component)) {
                    print('Option already exists for component: exiting', 'warn')
                } else {
                    addOption(component)
                }
            }
        } else {
            // create one or many new components

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
        }
    } catch (err) {
        print(err, 'error')
        process.exit(1)
    }
}

clear()
processArgs()