import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './DoNotDisturb';
import descriptionMd from './Description.md';

export { DoNotDisturb } from './stories/DoNotDisturb-index.stories';

export default {
  title: 'Components/Icons/DoNotDisturb',
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
