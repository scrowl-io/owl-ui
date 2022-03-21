import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Looks5';
import descriptionMd from './Description.md';

export { Looks5 } from './stories/Looks5-index.stories';

export default {
  title: 'Components/Icons/Looks5',
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
