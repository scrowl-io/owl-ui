import * as React from 'react';
import { component as Icon } from '../index';
import { IconsTranslateProps } from '../Translate.types';

import { display } from './Translate-display.stories';
import { appearance } from './Translate-appearance.stories';
import { size } from './Translate-size.stories';
import { theme } from './Translate-theme.stories';

export const Translate = (args: IconsTranslateProps) => (
  <Icon {...args}></Icon>
);

Translate.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Translate.argTypes = {
  display,
  appearance,
  size,
  theme,
};
