import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './LocalLaundryService';
import descriptionMd from './Description.md';

export { LocalLaundryService } from './stories/LocalLaundryService-index.stories';

export default {
  title: 'Components/Icons/LocalLaundryService',
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
