import * as React from 'react';
import { Carousel } from '../index';
import { CarouselDefaultProps, Slide } from '../Default.types';

import { appearance } from './Default-appearance.stories';
import { pxScale } from './Default-px-scale.stories';
import { theme } from './Default-theme.stories';

const slides: Slide[] = [
  {
    id: '1',
    style: { backgroundColor: '#017aba' },
    backgroundContent: '',
    caption: (
      <>
        <h3>Slide 1 label</h3>
        <p>Slide 1 caption text. Text example.</p>
      </>
    ),
    bsItemProps: {
      interval: 3000,
    },
  },
  {
    id: '2',
    style: { backgroundColor: '#6a98b0' },
    backgroundContent: '',
    caption: (
      <>
        <h3>Slide 2 label</h3>
        <p>Slide 2 caption text. Text example.</p>
      </>
    ),
    bsItemProps: {
      interval: 6000,
    },
    bsCaptionProps: {
      as: 'li',
      bsPrefix: 'example-caption-prefix owlui-carousel-caption',
    },
  },
];

export const Default = (args: CarouselDefaultProps) => <Carousel {...args} />;

Default.args = {
  appearance: appearance.defaultValue,
  pxScale: pxScale.defaultValue,
  theme: theme.defaultValue,
  slides: slides,
};

Default.argTypes = {
  appearance,
  pxScale,
  theme,
};
