import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Airplay';
import descriptionMd from './Description.md';

export { Airplay } from './stories/Airplay-index.stories';

export default {
  title: 'Components/Icons/Airplay',
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
