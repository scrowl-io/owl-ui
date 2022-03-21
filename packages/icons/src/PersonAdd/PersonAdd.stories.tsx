import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './PersonAdd';
import descriptionMd from './Description.md';

export { PersonAdd } from './stories/PersonAdd-index.stories';

export default {
  title: 'Components/Icons/PersonAdd',
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
