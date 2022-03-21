import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './AirplanemodeActive';
import descriptionMd from './Description.md';

export { AirplanemodeActive } from './stories/AirplanemodeActive-index.stories';

export default {
  title: 'Components/Icons/AirplanemodeActive',
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
