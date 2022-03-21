import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAddBoxProps } from '../AddBox.types';

import { display } from './AddBox-display.stories';
import { appearance } from './AddBox-appearance.stories';
import { size } from './AddBox-size.stories';
import { theme } from './AddBox-theme.stories';

export const AddBox = (args: IconsAddBoxProps) => (
  <Icon {...args}></Icon>
);

AddBox.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

AddBox.argTypes = {
  display,
  appearance,
  size,
  theme,
};
