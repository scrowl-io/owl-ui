import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './VolumeMute';
import descriptionMd from './Description.md';

export { VolumeMute } from './stories/VolumeMute-index.stories';

export default {
  title: 'Components/Icons/VolumeMute',
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
