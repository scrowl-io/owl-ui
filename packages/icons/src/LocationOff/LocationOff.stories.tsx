import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './LocationOff';
import descriptionMd from './Description.md';

export { LocationOff } from './stories/LocationOff-index.stories';

export default {
  title: 'Components/Icons/LocationOff',
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
