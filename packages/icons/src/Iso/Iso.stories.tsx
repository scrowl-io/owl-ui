import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Iso';
import descriptionMd from './Description.md';

export { Iso } from './stories/Iso-index.stories';

export default {
  title: 'Components/Icons/Iso',
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
