import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './DevicesOther';
import descriptionMd from './Description.md';

export { DevicesOther } from './stories/DevicesOther-index.stories';

export default {
  title: 'Components/Icons/DevicesOther',
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
