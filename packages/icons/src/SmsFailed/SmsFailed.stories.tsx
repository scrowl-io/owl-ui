import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './SmsFailed';
import descriptionMd from './Description.md';

export { SmsFailed } from './stories/SmsFailed-index.stories';

export default {
  title: 'Components/Icons/SmsFailed',
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
