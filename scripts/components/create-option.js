import fs from '../utls/file-system.js';
import { compile, definePaths } from './templater.js';

export const create = (component, folders) => {
  function optionPath(template, filename) {
    return definePaths(template, 'option', filename, folders.option);
  }

  function storyPath(template, filename) {
    return definePaths(template, 'stories', filename, folders.stories);
  }

  folders.option = `${folders.src}/${component.optionCap}`;
  folders.stories = `${folders.option}/stories`;

  const defaultOpt = 'default';
  const fileList = {
    index: optionPath('index', 'index.ts'),
    description: optionPath('description', 'Description.md'),
    story: optionPath('story', `${component.optionCap}.stories.tsx`),
    stories: storyPath('index', `${component.optionCap}-index.stories.tsx`),
    storiesAppearance: storyPath(
      'appearance',
      `${component.optionCap}-appearance.stories.tsx`
    ),
    storiesSize: storyPath('size', `${component.optionCap}-size.stories.tsx`),
    storiesTheme: storyPath(
      'theme',
      `${component.optionCap}-theme.stories.tsx`
    ),
  };

  if (component.option === defaultOpt) {
    fileList.styles = optionPath(`styles-${defaultOpt}`, `styles.module.scss`);
    fileList.component = optionPath(
      `component-${defaultOpt}`,
      `${component.optionCap}.tsx`
    );
    fileList.types = optionPath(
      `types-${defaultOpt}`,
      `${component.optionCap}.types.ts`
    );
  } else {
    fileList.styles = optionPath('styles', `styles.module.scss`);
    fileList.component = optionPath('component', `${component.optionCap}.tsx`);
    fileList.types = optionPath('types', `${component.optionCap}.types.ts`);
  }

  for (let filename in fileList) {
    fileList[filename].contents = compile(
      fileList[filename].template,
      component
    );
    fs.setFile(fileList[filename].path, fileList[filename].contents);
  }
};

export default {
  create,
};
