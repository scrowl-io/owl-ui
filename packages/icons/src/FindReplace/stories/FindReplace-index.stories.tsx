import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFindReplaceProps } from '../FindReplace.types';

import { display } from './FindReplace-display.stories';
import { appearance } from './FindReplace-appearance.stories';
import { size } from './FindReplace-size.stories';
import { theme } from './FindReplace-theme.stories';

export const FindReplace = (args: IconsFindReplaceProps) => (
  <Icon {...args}></Icon>
);

FindReplace.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FindReplace.argTypes = {
  display,
  appearance,
  size,
  theme,
};
