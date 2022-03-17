import * as React from 'react';
import { component as Card } from '../index';
import { component as CardHeader } from '../../CardHeader';
import { component as CardBody } from '../../CardBody';
import { component as CardFooter } from '../../CardFooter';
import { Default as Button } from '../../../../button/src/index';
import { CardDefaultProps } from '../Default.types';

import { appearance } from './Default-appearance.stories';
import { theme } from './Default-theme.stories';

export const Default = (args: CardDefaultProps) => (
  <Card {...args}>
    <CardHeader>
      <h3>Card Title</h3>
    </CardHeader>
    <CardBody>
      <p>Some quick example text to build on the card content</p>
    </CardBody>
    <CardFooter>
      <Button>Submit</Button>
    </CardFooter>
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
