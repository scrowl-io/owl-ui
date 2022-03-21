import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './LayersClear';
import descriptionMd from './Description.md';

export { LayersClear } from './stories/LayersClear-index.stories';

export default {
  title: 'Components/Icons/LayersClear',
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
