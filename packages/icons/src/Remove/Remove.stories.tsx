import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Remove';
import descriptionMd from './Description.md';

export { Remove } from './stories/Remove-index.stories';

export default {
  title: 'Components/Icons/Remove',
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
