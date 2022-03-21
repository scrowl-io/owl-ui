import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './LabelOutline';
import descriptionMd from './Description.md';

export { LabelOutline } from './stories/LabelOutline-index.stories';

export default {
  title: 'Components/Icons/LabelOutline',
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
