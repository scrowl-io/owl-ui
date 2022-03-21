import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Autorenew';
import descriptionMd from './Description.md';

export { Autorenew } from './stories/Autorenew-index.stories';

export default {
  title: 'Components/Icons/Autorenew',
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
