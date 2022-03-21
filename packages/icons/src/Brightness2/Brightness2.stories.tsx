import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Brightness2';
import descriptionMd from './Description.md';

export { Brightness2 } from './stories/Brightness2-index.stories';

export default {
  title: 'Components/Icons/Brightness2',
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
