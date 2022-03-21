import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './HotTub';
import descriptionMd from './Description.md';

export { HotTub } from './stories/HotTub-index.stories';

export default {
  title: 'Components/Icons/HotTub',
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
