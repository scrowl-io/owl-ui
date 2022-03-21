import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './CloudDone';
import descriptionMd from './Description.md';

export { CloudDone } from './stories/CloudDone-index.stories';

export default {
  title: 'Components/Icons/CloudDone',
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
