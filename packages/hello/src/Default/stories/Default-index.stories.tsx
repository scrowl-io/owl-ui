import * as React from 'react';
import { component as Hello } from '../index';
import { HelloDefaultProps } from '../Default.types';

import { appearance } from './Default-appearance.stories';
import { size } from './Default-size.stories';
import { theme } from './Default-theme.stories';

export const Default = (args: HelloDefaultProps) => <Hello {...args}>Hello World</Hello>;

Default.args = {
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Default.argTypes = {
  appearance,
  size,
  theme,
};
