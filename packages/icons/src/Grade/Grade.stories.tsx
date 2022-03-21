import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Grade';
import descriptionMd from './Description.md';

export { Grade } from './stories/Grade-index.stories';

export default {
  title: 'Components/Icons/Grade',
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
