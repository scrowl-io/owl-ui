import * as React from 'react';
import { component as Icon } from '../index';
import { IconsErrorProps } from '../Error.types';

import { display } from './Error-display.stories';
import { appearance } from './Error-appearance.stories';
import { size } from './Error-size.stories';
import { theme } from './Error-theme.stories';

export const Error = (args: IconsErrorProps) => (
  <Icon {...args}></Icon>
);

Error.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Error.argTypes = {
  display,
  appearance,
  size,
  theme,
};
