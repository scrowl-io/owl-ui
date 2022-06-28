import fs from '../utls/file-system.js';
import { compile, definePaths } from './templater.js';

export const optionPath = (template, filename, folders) => {
  return definePaths(template, 'option', filename, folders.option);
};

export const storyPath = (template, filename, folders) => {
  return definePaths(template, 'stories', filename, folders.stories);
};

export const create = (component, folders) => {
  folders.option = `${folders.src}/${component.optionPas}`;
  folders.stories = `${folders.option}/stories`;

  const defaultOpt = 'default';
  const iconOpt = 'icons';
  const fileList = {
    index: optionPath('index', 'index.ts', folders),
    description: optionPath('description', 'Description.md', folders),
    story: optionPath('story', `${component.optionPas}.stories.tsx`, folders),
    stories: storyPath(
      'index',
      `${component.optionPas}-index.stories.tsx`,
      folders
    ),
    storiesVariant: storyPath(
      'variant',
      `${component.optionPas}-variant.stories.tsx`,
      folders
    ),
    storiesSize: storyPath(
      'size',
      `${component.optionPas}-size.stories.tsx`,
      folders
    ),
    storiesTheme: storyPath(
      'theme',
      `${component.optionPas}-theme.stories.tsx`,
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
      `${component.optionPas}.tsx`,
      folders
    );
    fileList.index = optionPath(`index-${defaultOpt}`, `index.ts`, folders);
    fileList.types = optionPath(
      `types-${defaultOpt}`,
      `${component.optionPas}.types.ts`,
      folders
    );
    fileList.storiesVariant = storyPath(
      `variant-${defaultOpt}`,
      `${component.optionPas}-variant.stories.tsx`,
      folders
    );
    fileList.storiesSize = storyPath(
      `size-${defaultOpt}`,
      `${component.optionPas}-size.stories.tsx`,
      folders
    );
    fileList.storiesTheme = storyPath(
      `theme-${defaultOpt}`,
      `${component.optionPas}-theme.stories.tsx`,
      folders
    );
  } else if (component.name === iconOpt) {
    fileList.component = optionPath(
      `component-${iconOpt}`,
      `${component.optionPas}.tsx`,
      folders
    );
    fileList.types = optionPath(
      `types-${iconOpt}`,
      `${component.optionPas}.types.ts`,
      folders
    );
    fileList.stories = storyPath(
      `index-${iconOpt}`,
      `${component.optionPas}-index.stories.tsx`,
      folders
    );
    fileList.storiesDisplay = storyPath(
      'display',
      `${component.optionPas}-display.stories.tsx`,
      folders
    );
  } else {
    fileList.styles = optionPath('styles', `styles.module.scss`, folders);
    fileList.component = optionPath(
      'component',
      `${component.optionPas}.tsx`,
      folders
    );
    fileList.types = optionPath(
      'types',
      `${component.optionPas}.types.ts`,
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
