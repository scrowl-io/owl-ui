import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFolderSpecialProps } from '../FolderSpecial.types';

import { display } from './FolderSpecial-display.stories';
import { appearance } from './FolderSpecial-appearance.stories';
import { size } from './FolderSpecial-size.stories';
import { theme } from './FolderSpecial-theme.stories';

export const FolderSpecial = (args: IconsFolderSpecialProps) => (
  <Icon {...args}></Icon>
);

FolderSpecial.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FolderSpecial.argTypes = {
  display,
  appearance,
  size,
  theme,
};
