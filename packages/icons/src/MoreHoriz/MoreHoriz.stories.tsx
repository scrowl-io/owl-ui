import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './MoreHoriz';
import descriptionMd from './Description.md';

export { MoreHoriz } from './stories/MoreHoriz-index.stories';

export default {
  title: 'Components/Icons/MoreHoriz',
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
