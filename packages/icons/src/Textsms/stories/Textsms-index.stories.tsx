import * as React from 'react';
import { component as Icon } from '../index';
import { IconsTextsmsProps } from '../Textsms.types';

import { display } from './Textsms-display.stories';
import { appearance } from './Textsms-appearance.stories';
import { size } from './Textsms-size.stories';
import { theme } from './Textsms-theme.stories';

export const Textsms = (args: IconsTextsmsProps) => (
  <Icon {...args}></Icon>
);

Textsms.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Textsms.argTypes = {
  display,
  appearance,
  size,
  theme,
};
