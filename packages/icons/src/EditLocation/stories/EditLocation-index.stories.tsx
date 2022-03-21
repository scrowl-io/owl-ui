import * as React from 'react';
import { component as Icon } from '../index';
import { IconsEditLocationProps } from '../EditLocation.types';

import { display } from './EditLocation-display.stories';
import { appearance } from './EditLocation-appearance.stories';
import { size } from './EditLocation-size.stories';
import { theme } from './EditLocation-theme.stories';

export const EditLocation = (args: IconsEditLocationProps) => (
  <Icon {...args}></Icon>
);

EditLocation.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

EditLocation.argTypes = {
  display,
  appearance,
  size,
  theme,
};
