import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Tune';
import descriptionMd from './Description.md';

export { Tune } from './stories/Tune-index.stories';

export default {
  title: 'Components/Icons/Tune',
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
