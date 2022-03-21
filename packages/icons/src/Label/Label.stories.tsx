import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Label';
import descriptionMd from './Description.md';

export { Label } from './stories/Label-index.stories';

export default {
  title: 'Components/Icons/Label',
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
