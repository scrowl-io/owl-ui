import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Satellite';
import descriptionMd from './Description.md';

export { Satellite } from './stories/Satellite-index.stories';

export default {
  title: 'Components/Icons/Satellite',
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
