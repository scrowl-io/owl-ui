import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './DonutSmall';
import descriptionMd from './Description.md';

export { DonutSmall } from './stories/DonutSmall-index.stories';

export default {
  title: 'Components/Icons/DonutSmall',
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
