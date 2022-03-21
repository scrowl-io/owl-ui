import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Tram';
import descriptionMd from './Description.md';

export { Tram } from './stories/Tram-index.stories';

export default {
  title: 'Components/Icons/Tram',
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
