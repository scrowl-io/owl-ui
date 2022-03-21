import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './DirectionsCar';
import descriptionMd from './Description.md';

export { DirectionsCar } from './stories/DirectionsCar-index.stories';

export default {
  title: 'Components/Icons/DirectionsCar',
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
