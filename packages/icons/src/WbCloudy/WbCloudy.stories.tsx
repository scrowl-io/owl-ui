import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './WbCloudy';
import descriptionMd from './Description.md';

export { WbCloudy } from './stories/WbCloudy-index.stories';

export default {
  title: 'Components/Icons/WbCloudy',
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
