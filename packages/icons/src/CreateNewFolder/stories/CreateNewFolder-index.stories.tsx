import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCreateNewFolderProps } from '../CreateNewFolder.types';

import { display } from './CreateNewFolder-display.stories';
import { appearance } from './CreateNewFolder-appearance.stories';
import { size } from './CreateNewFolder-size.stories';
import { theme } from './CreateNewFolder-theme.stories';

export const CreateNewFolder = (args: IconsCreateNewFolderProps) => (
  <Icon {...args}></Icon>
);

CreateNewFolder.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

CreateNewFolder.argTypes = {
  display,
  appearance,
  size,
  theme,
};
