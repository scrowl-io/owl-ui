import * as React from 'react';
import { component as Card } from '../index';
import { CardDefaultProps } from '../Default.types';

import { appearance } from './Default-appearance.stories';
import { size } from './Default-size.stories';
import { theme } from './Default-theme.stories';

export const Default = (args: CardDefaultProps) => (
  <Card {...args}>Hello World</Card>
);

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
