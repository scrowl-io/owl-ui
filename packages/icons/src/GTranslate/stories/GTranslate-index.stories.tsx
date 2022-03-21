import * as React from 'react';
import { component as Icon } from '../index';
import { IconsGTranslateProps } from '../GTranslate.types';

import { display } from './GTranslate-display.stories';
import { appearance } from './GTranslate-appearance.stories';
import { size } from './GTranslate-size.stories';
import { theme } from './GTranslate-theme.stories';

export const GTranslate = (args: IconsGTranslateProps) => (
  <Icon {...args}></Icon>
);

GTranslate.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

GTranslate.argTypes = {
  display,
  appearance,
  size,
  theme,
};
