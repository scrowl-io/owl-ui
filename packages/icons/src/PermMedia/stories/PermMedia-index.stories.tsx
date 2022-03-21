import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPermMediaProps } from '../PermMedia.types';

import { display } from './PermMedia-display.stories';
import { appearance } from './PermMedia-appearance.stories';
import { size } from './PermMedia-size.stories';
import { theme } from './PermMedia-theme.stories';

export const PermMedia = (args: IconsPermMediaProps) => (
  <Icon {...args}></Icon>
);

PermMedia.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PermMedia.argTypes = {
  display,
  appearance,
  size,
  theme,
};
