import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './CloudOff';
import descriptionMd from './Description.md';

export { CloudOff } from './stories/CloudOff-index.stories';

export default {
  title: 'Components/Icons/CloudOff',
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
