import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Filter7';
import descriptionMd from './Description.md';

export { Filter7 } from './stories/Filter7-index.stories';

export default {
  title: 'Components/Icons/Filter7',
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
