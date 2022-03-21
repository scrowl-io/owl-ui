import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './SystemUpdateAlt';
import descriptionMd from './Description.md';

export { SystemUpdateAlt } from './stories/SystemUpdateAlt-index.stories';

export default {
  title: 'Components/Icons/SystemUpdateAlt',
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
