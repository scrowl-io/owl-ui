import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Create';
import descriptionMd from './Description.md';

export { Create } from './stories/Create-index.stories';

export default {
  title: 'Components/Icons/Create',
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
