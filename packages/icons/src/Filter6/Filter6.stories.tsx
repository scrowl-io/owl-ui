import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Filter6';
import descriptionMd from './Description.md';

export { Filter6 } from './stories/Filter6-index.stories';

export default {
  title: 'Components/Icons/Filter6',
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
