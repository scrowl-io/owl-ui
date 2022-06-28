import * as React from 'react';
import { CloseButton } from '../index';
import { CloseButtonDefaultProps } from '../Default.types';

import { variant } from './Default-variant.stories';

export const Default = (args: CloseButtonDefaultProps) => (
  <CloseButton {...args}></CloseButton>
);

Default.args = {
  variant: variant.defaultValue,
  disabled: false,
};

Default.argTypes = {
  variant,
};
