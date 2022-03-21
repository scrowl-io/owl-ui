import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './AttachMoney';
import descriptionMd from './Description.md';

export { AttachMoney } from './stories/AttachMoney-index.stories';

export default {
  title: 'Components/Icons/AttachMoney',
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
