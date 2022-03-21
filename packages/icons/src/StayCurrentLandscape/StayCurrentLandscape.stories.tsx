import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './StayCurrentLandscape';
import descriptionMd from './Description.md';

export { StayCurrentLandscape } from './stories/StayCurrentLandscape-index.stories';

export default {
  title: 'Components/Icons/StayCurrentLandscape',
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
