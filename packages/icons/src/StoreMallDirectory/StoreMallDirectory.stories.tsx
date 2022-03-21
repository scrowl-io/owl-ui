import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './StoreMallDirectory';
import descriptionMd from './Description.md';

export { StoreMallDirectory } from './stories/StoreMallDirectory-index.stories';

export default {
  title: 'Components/Icons/StoreMallDirectory',
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
