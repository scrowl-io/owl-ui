import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './LocalCarWash';
import descriptionMd from './Description.md';

export { LocalCarWash } from './stories/LocalCarWash-index.stories';

export default {
  title: 'Components/Icons/LocalCarWash',
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
