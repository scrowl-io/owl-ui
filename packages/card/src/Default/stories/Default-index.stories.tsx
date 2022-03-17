import * as React from 'react';
import { component as Card } from '../index';
import { component as CardHeader } from '../../CardHeader/index';
import { CardDefaultProps } from '../Default.types';

import { appearance } from './Default-appearance.stories';
import { theme } from './Default-theme.stories';

export const Default = (args: CardDefaultProps) => (
  <Card {...args}>
    <CardHeader>
      <h3>Card Header</h3>
    </CardHeader>
  </Card>
);

Default.args = {
  appearance: 'Default',
  theme: 'Default',
};

Default.argTypes = {
  appearance,
  theme,
};
