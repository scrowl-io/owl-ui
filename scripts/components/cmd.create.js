const argv = require('yargs-parser')(process.argv.slice(2))
const strs = require('../utls/strings')
const { print, clear } = require('../utls/console')
const fs = require('../utls/file-system')
const { compile } = require('./templater')

function createBoilerplate(component) {

    function setFilePath(filename, subPath) {
        subPath = subPath || 'base'
        const basePath = folders[subPath]

        return `${basePath}/${filename}`
    }

    function getTemplateFile(filename) {
        return fs.getFile(`scripts/components/templates/new/${filename}.hbs`)
    }

    function createDef(template, file, folder) {
        return {
            template: getTemplateFile(template),
            path: setFilePath(file, folder)
        }
    }

    const folders = {
            base: `packages/${component.name}`
        }

    folders.src = `${folders.base}/src`
    folders.default = `${folders.src}/${component.cap}`
    folders.stories = `${folders.default}/stories`
    
    const fileList = {
            package: createDef('package', 'package.json'),
            license: createDef('license', 'LICENSE'),
            npmignore: createDef('npmignore', '.npmignore'),
            readme: createDef('readme', 'README.md'),
            tsconfig: createDef('tsconfig', 'tsconfig.json'),
            postcss: createDef('postcss', 'postcssrc.json'),
            index: createDef('index', 'index.ts', 'src'),
            styles: createDef('styles', 'index.scss', 'src'),
            defaultIndex: createDef('default-index', 'index.ts', 'default'),
            defaultStyles: createDef('default-styles', 'styles.module.scss', 'default'),
            defaultDescription: createDef('default-description', 'Description.md', 'default'),
            defaultComponent: createDef('default-component', `${component.cap}.tsx`, 'default'),
            defaultTypes: createDef('default-types', `${component.cap}.types.ts`, 'default'),
            defaultStory: createDef('default-story', `${component.cap}.stories.tsx`, 'default'),
            defaultStories: createDef('default-stories', `${component.cap}-default.stories.tsx`, 'stories'),
            defaultStoriesAppearance: createDef('default-stories-appearance', `${component.cap}-appearance.stories.tsx`, 'stories'),
            defaultStoriesSize: createDef('default-stories-size', `${component.cap}-size.stories.tsx`, 'stories'),
            defaultStoriesTheme: createDef('default-stories-theme', `${component.cap}-theme.stories.tsx`, 'stories')
        }
    
    for (let filename in fileList) {
        fileList[filename].contents = compile(fileList[filename].template, component)
        fs.setFile(fileList[filename].path, fileList[filename].contents)
    }
}

function getParts(component) {
    const parts = component.split('@')

    if (!parts.length) {
        throw Error('Component name missing')
    }

    const name = strs.toLower(parts[0])

    if (!parts[1]) {
        throw Error('Component abbreviation missing: [name]@[abv]')
    }

    return {
        name: name,
        abv: strs.toLower(parts[1]),
        cap: strs.toCapitalize(name)
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
            throw Error('No component names submitted \n Use flag -n with a non-spaced string to create a single component \n Use flag -m with comma separated non-spaced string to create multiple components')
        }
    
        components.forEach(createBoilerplate)
    } catch (err) {
        print(err.message, 'error')
        process.exit(1)
    }
}

clear()
processArgs()