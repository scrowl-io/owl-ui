import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './PermDeviceInformation';
import descriptionMd from './Description.md';

export { PermDeviceInformation } from './stories/PermDeviceInformation-index.stories';

export default {
  title: 'Components/Icons/PermDeviceInformation',
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
