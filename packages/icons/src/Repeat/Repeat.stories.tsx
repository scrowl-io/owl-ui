import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Repeat';
import descriptionMd from './Description.md';

export { Repeat } from './stories/Repeat-index.stories';

export default {
  title: 'Components/Icons/Repeat',
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
