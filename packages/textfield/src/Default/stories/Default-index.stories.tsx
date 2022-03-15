import * as React from 'react';
import { component as Textfield } from '../index';
import { TextfieldDefaultProps } from '../Default.types';

import { appearance } from './Default-appearance.stories';
import { size } from './Default-size.stories';
import { theme } from './Default-theme.stories';

export const Default = (args: TextfieldDefaultProps) => <Textfield {...args} />;

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
