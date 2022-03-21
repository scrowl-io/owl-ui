import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './LeakAdd';
import descriptionMd from './Description.md';

export { LeakAdd } from './stories/LeakAdd-index.stories';

export default {
  title: 'Components/Icons/LeakAdd',
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
