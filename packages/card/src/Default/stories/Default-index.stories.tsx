import * as React from 'react';
import { CardDefaultProps } from '../Default.types';
import { Card } from '../index';
import { CardHeader } from '../../CardHeader';
import { CardTitle } from '../../CardTitle';
import { CardBody } from '../../CardBody';
import { CardSubTitle } from '../../CardSubTitle';
import { CardText } from '../../CardText';
import { CardLink } from '../../CardLink';
import { CardListGroup } from '../../CardListGroup';
import { CardListItem } from '../../CardListItem';
import { CardFooter } from '../../CardFooter';

import { bg } from './Default-bg.stories';
import { text } from './Default-text.stories';
import { size } from './Default-size.stories';
import { theme } from './Default-theme.stories';

export const Default = (args: CardDefaultProps) => (
  <Card {...args}>
    <CardHeader>Card Header</CardHeader>
    <CardBody>
      <CardTitle>Card Title</CardTitle>
      <CardSubTitle>Card Subtitle</CardSubTitle>
      <CardText>
        Some quick example text to build on the card title and make up the bulk
        of the card`s content.
      </CardText>
      <CardListGroup>
        <CardListItem>
          <CardLink href="#">Card Link 1</CardLink>
        </CardListItem>
        <CardListItem>
          <CardLink href="#">Card Link 2</CardLink>
        </CardListItem>
        <CardListItem>
          <CardLink href="#">Card Link 3</CardLink>
        </CardListItem>
      </CardListGroup>
    </CardBody>
    <CardFooter>Card Footer</CardFooter>
  </Card>
);

Default.args = {
  bg: 'light',
  text: 'dark',
  size: 'Sm',
  theme: 'Default',
};

Default.argTypes = {
  bg,
  text,
  size,
  theme,
};
