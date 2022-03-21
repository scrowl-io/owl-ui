import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAddLocationProps } from '../AddLocation.types';

import { display } from './AddLocation-display.stories';
import { appearance } from './AddLocation-appearance.stories';
import { size } from './AddLocation-size.stories';
import { theme } from './AddLocation-theme.stories';

export const AddLocation = (args: IconsAddLocationProps) => (
  <Icon {...args}></Icon>
);

AddLocation.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

AddLocation.argTypes = {
  display,
  appearance,
  size,
  theme,
};
