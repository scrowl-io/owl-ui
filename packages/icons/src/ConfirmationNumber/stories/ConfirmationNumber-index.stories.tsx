import * as React from 'react';
import { component as Icon } from '../index';
import { IconsConfirmationNumberProps } from '../ConfirmationNumber.types';

import { display } from './ConfirmationNumber-display.stories';
import { appearance } from './ConfirmationNumber-appearance.stories';
import { size } from './ConfirmationNumber-size.stories';
import { theme } from './ConfirmationNumber-theme.stories';

export const ConfirmationNumber = (args: IconsConfirmationNumberProps) => (
  <Icon {...args}></Icon>
);

ConfirmationNumber.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ConfirmationNumber.argTypes = {
  display,
  appearance,
  size,
  theme,
};
