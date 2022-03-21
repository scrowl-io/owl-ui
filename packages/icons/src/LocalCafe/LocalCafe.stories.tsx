import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './LocalCafe';
import descriptionMd from './Description.md';

export { LocalCafe } from './stories/LocalCafe-index.stories';

export default {
  title: 'Components/Icons/LocalCafe',
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
