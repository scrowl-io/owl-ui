import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './ArrowDropUp';
import descriptionMd from './Description.md';

export { ArrowDropUp } from './stories/ArrowDropUp-index.stories';

export default {
  title: 'Components/Icons/ArrowDropUp',
  component: Component,
  parameters: {
    docs: {
      description: {
        component: [descriptionMd].join('/n'),
      },
    },
  },
  decorators: [
    Story => (
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;
