import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './StayPrimaryLandscape';
import descriptionMd from './Description.md';

export { StayPrimaryLandscape } from './stories/StayPrimaryLandscape-index.stories';

export default {
  title: 'Components/Icons/StayPrimaryLandscape',
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
