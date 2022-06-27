import * as React from 'react';
import { component as CloseButton } from '../index';
import { CloseButtonDefaultProps } from '../Default.types';

import { variant } from './Default-variant.stories';
import { size } from './Default-size.stories';
import { theme } from './Default-theme.stories';

export const Default = (args: CloseButtonDefaultProps) => (
  <CloseButton {...args}></CloseButton>
);

Default.args = {
  variant: variant.defaultValue,
  size: size.defaultValue,
  theme: theme.defaultValue,
  disabled: false,
};

Default.argTypes = {
  variant,
  size,
  theme,
};
