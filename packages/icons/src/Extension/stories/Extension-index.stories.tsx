import * as React from 'react';
import { component as Icon } from '../index';
import { IconsExtensionProps } from '../Extension.types';

import { display } from './Extension-display.stories';
import { appearance } from './Extension-appearance.stories';
import { size } from './Extension-size.stories';
import { theme } from './Extension-theme.stories';

export const Extension = (args: IconsExtensionProps) => (
  <Icon {...args}></Icon>
);

Extension.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Extension.argTypes = {
  display,
  appearance,
  size,
  theme,
};
