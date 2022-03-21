import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Filter2';
import descriptionMd from './Description.md';

export { Filter2 } from './stories/Filter2-index.stories';

export default {
  title: 'Components/Icons/Filter2',
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
