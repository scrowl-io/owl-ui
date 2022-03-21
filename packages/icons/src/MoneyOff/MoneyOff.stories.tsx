import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './MoneyOff';
import descriptionMd from './Description.md';

export { MoneyOff } from './stories/MoneyOff-index.stories';

export default {
  title: 'Components/Icons/MoneyOff',
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
