const argv = require('yargs-parser')(process.argv.slice(2))
const strs = require('../utls/strings')
const { clear } = require('../utls/console')
const fs = require('../utls/file-system')
const { compile } = require('./templater')

function createBoilerplate(componentName) {

    function setFilePath(filename, subPath) {
        subPath = subPath || 'base'
        const basePath = componentFolders[subPath]

        return `${basePath}/${filename}`
    }

    function getTemplateFile(filename) {
        return fs.getFile(`scripts/components/templates/${filename}.hbs`)
    }

    function createDef(template, file, folder) {
        return {
            template: getTemplateFile(template),
            path: setFilePath(file, folder)
        }
    }

    const componentCap = strs.toCapitalize(componentName)
    const componentFolders = {
            base: `packages/${componentName}`
        }

    componentFolders.src = `${componentFolders.base}/src`
    componentFolders.default = `${componentFolders.src}/${componentCap}`
    componentFolders.stories = `${componentFolders.default}/stories`
    
    const fileList = {
            package: createDef('package', 'package.json'),
            license: createDef('license', 'LICENSE'),
            npmignore: createDef('npmignore', '.npmignore'),
            readme: createDef('readme', 'README.md'),
            tsconfig: createDef('tsconfig', 'tsconfig.json'),
            postcss: createDef('postcss', 'postcssrc.json'),
            index: createDef('index', 'index.ts', 'src'),
            defaultIndex: createDef('default-index', 'index.ts', 'default'),
            defaultStyles: createDef('default-styles', 'styles.scss', 'default'),
            defaultDescription: createDef('default-description', 'Description.md', 'default'),
            defaultComponent: createDef('default-component', `${componentCap}.tsx`, 'default'),
            defaultStory: createDef('default-story', `${componentCap}.stories.tsx`, 'default'),
            defaultStories: createDef('default-stories', `${componentCap}-default.stories.tsx`, 'stories')
        }
    const templateVars = {
            componentName: componentName,
            componentCap: componentCap
        }
    
    for (let filename in fileList) {
        fileList[filename].contents = compile(fileList[filename].template, templateVars)
        fs.setFile(fileList[filename].path, fileList[filename].contents)
    }
}

function processArgs() {
    const componentNames = []

    if (argv.hasOwnProperty('n')) {
        componentNames.push(strs.toLower(argv.n))
    }

    if (argv.hasOwnProperty('m')) {
        const many = argv.m.split(',')

        componentNames = componentNames.concat(many.map(strs.toLower))
    }

    componentNames.forEach(createBoilerplate)
}

clear()
processArgs()