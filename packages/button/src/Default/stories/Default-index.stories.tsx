import * as React from 'react';
import { component as Button } from '../index';
import { ButtonDefaultProps } from '../Default.types';

import { appearance } from './Default-appearance.stories';
import { size } from './Default-size.stories';
import { theme } from './Default-theme.stories';

export const Default = (args: ButtonDefaultProps) => (
  <Button {...args}>
    <>Hello World</>
  </Button>
);

Default.args = {
  appearance: 'Default',
  size: 'Md',
  theme: 'Default',
};

Default.argTypes = {
  appearance,
  size,
  theme,
};
