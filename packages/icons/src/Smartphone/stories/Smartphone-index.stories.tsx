import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSmartphoneProps } from '../Smartphone.types';

import { display } from './Smartphone-display.stories';
import { appearance } from './Smartphone-appearance.stories';
import { size } from './Smartphone-size.stories';
import { theme } from './Smartphone-theme.stories';

export const Smartphone = (args: IconsSmartphoneProps) => (
  <Icon {...args}></Icon>
);

Smartphone.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Smartphone.argTypes = {
  display,
  appearance,
  size,
  theme,
};
