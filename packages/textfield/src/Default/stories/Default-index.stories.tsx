import * as React from 'react';
import { Textfield } from '../index';
import { TextfieldDefaultProps } from '../Default.types';

import { appearance } from './Default-appearance.stories';
import { size } from './Default-size.stories';
import { theme } from './Default-theme.stories';

export const Default = (args: TextfieldDefaultProps) => <Textfield {...args} />;

Default.args = {
  appearance: 'Default',
  size: 'Lg',
  theme: 'Default',
};

Default.argTypes = {
  appearance,
  size,
  theme,
};
