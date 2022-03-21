import fs from '../utls/file-system.js';
import { compile, definePaths } from './templater.js';

export const optionPath = (template, filename, folders) => {
  return definePaths(template, 'option', filename, folders.option);
};

export const storyPath = (template, filename, folders) => {
  return definePaths(template, 'stories', filename, folders.stories);
};

export const create = (component, folders) => {
  folders.option = `${folders.src}/${component.optionCap}`;
  folders.stories = `${folders.option}/stories`;

  const defaultOpt = 'default';
  const iconOpt = 'icons';
  const fileList = {
    index: optionPath('index', 'index.ts', folders),
    description: optionPath('description', 'Description.md', folders),
    story: optionPath('story', `${component.optionCap}.stories.tsx`, folders),
    stories: storyPath(
      'index',
      `${component.optionCap}-index.stories.tsx`,
      folders
    ),
    storiesAppearance: storyPath(
      'appearance',
      `${component.optionCap}-appearance.stories.tsx`,
      folders
    ),
    storiesSize: storyPath(
      'size',
      `${component.optionCap}-size.stories.tsx`,
      folders
    ),
    storiesTheme: storyPath(
      'theme',
      `${component.optionCap}-theme.stories.tsx`,
      folders
    ),
  };

  if (component.option === defaultOpt) {
    fileList.styles = optionPath(
      `styles-${defaultOpt}`,
      `styles.module.scss`,
      folders
    );
    fileList.component = optionPath(
      `component-${defaultOpt}`,
      `${component.optionCap}.tsx`,
      folders
    );
    fileList.types = optionPath(
      `types-${defaultOpt}`,
      `${component.optionCap}.types.ts`,
      folders
    );
  } else if (component.name === iconOpt) {
    fileList.component = optionPath(
      `component-${iconOpt}`,
      `${component.optionCap}.tsx`,
      folders
    );
    fileList.types = optionPath(
      'types',
      `${component.optionCap}.types.ts`,
      folders
    );
  } else {
    fileList.styles = optionPath('styles', `styles.module.scss`, folders);
    fileList.component = optionPath(
      'component',
      `${component.optionCap}.tsx`,
      folders
    );
    fileList.types = optionPath(
      'types',
      `${component.optionCap}.types.ts`,
      folders
    );
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
