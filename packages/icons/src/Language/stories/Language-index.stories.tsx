import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLanguageProps } from '../Language.types';

import { display } from './Language-display.stories';
import { appearance } from './Language-appearance.stories';
import { size } from './Language-size.stories';
import { theme } from './Language-theme.stories';

export const Language = (args: IconsLanguageProps) => (
  <Icon {...args}></Icon>
);

Language.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Language.argTypes = {
  display,
  appearance,
  size,
  theme,
};
