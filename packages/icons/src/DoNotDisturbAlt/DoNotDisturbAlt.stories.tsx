import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './DoNotDisturbAlt';
import descriptionMd from './Description.md';

export { DoNotDisturbAlt } from './stories/DoNotDisturbAlt-index.stories';

export default {
  title: 'Components/Icons/DoNotDisturbAlt',
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
