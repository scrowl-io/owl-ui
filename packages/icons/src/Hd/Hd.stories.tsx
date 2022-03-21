import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Hd';
import descriptionMd from './Description.md';

export { Hd } from './stories/Hd-index.stories';

export default {
  title: 'Components/Icons/Hd',
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
