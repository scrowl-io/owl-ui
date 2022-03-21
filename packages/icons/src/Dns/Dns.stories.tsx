import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Dns';
import descriptionMd from './Description.md';

export { Dns } from './stories/Dns-index.stories';

export default {
  title: 'Components/Icons/Dns',
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
