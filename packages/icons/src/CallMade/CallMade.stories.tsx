import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './CallMade';
import descriptionMd from './Description.md';

export { CallMade } from './stories/CallMade-index.stories';

export default {
  title: 'Components/Icons/CallMade',
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
