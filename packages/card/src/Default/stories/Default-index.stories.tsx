import * as React from 'react';
import { component as Card } from '../index';
import { CardDefaultProps } from '../Default.types';

import { appearance } from './Default-appearance.stories';
import { theme } from './Default-theme.stories';
import { component as CardHeader } from '../../CardHeader';
import { component as CardTitle } from '../../CardTitle';
import { component as CardBody } from '../../CardBody';

export const Default = (args: CardDefaultProps) => (
  <Card {...args}>
    <CardHeader>This is a header</CardHeader>
    <CardBody>
      <CardTitle>This is a title</CardTitle>
    </CardBody>
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
