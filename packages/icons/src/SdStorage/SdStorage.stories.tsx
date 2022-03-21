import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './SdStorage';
import descriptionMd from './Description.md';

export { SdStorage } from './stories/SdStorage-index.stories';

export default {
  title: 'Components/Icons/SdStorage',
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
