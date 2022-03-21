import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Update';
import descriptionMd from './Description.md';

export { Update } from './stories/Update-index.stories';

export default {
  title: 'Components/Icons/Update',
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
