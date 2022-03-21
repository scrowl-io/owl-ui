import * as React from 'react';
import { component as Icon } from '../index';
import { IconsRadioProps } from '../Radio.types';

import { display } from './Radio-display.stories';
import { appearance } from './Radio-appearance.stories';
import { size } from './Radio-size.stories';
import { theme } from './Radio-theme.stories';

export const Radio = (args: IconsRadioProps) => (
  <Icon {...args}></Icon>
);

Radio.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Radio.argTypes = {
  display,
  appearance,
  size,
  theme,
};
