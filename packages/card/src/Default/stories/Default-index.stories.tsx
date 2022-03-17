import * as React from 'react';
import { component as Card } from '../index';
import { CardDefaultProps } from '../Default.types';

import { appearance } from './Default-appearance.stories';
import { theme } from './Default-theme.stories';

export const Default = (args: CardDefaultProps) => (
  <Card {...args}>Hello World</Card>
);

Default.args = {
  appearance: 'Default',
  theme: 'Default',
};

Default.argTypes = {
  appearance,
  theme,
};
