import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './HdrOn';
import descriptionMd from './Description.md';

export { HdrOn } from './stories/HdrOn-index.stories';

export default {
  title: 'Components/Icons/HdrOn',
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
