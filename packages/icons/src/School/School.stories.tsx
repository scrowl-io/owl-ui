import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './School';
import descriptionMd from './Description.md';

export { School } from './stories/School-index.stories';

export default {
  title: 'Components/Icons/School',
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
