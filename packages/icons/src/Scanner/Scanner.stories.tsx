import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Scanner';
import descriptionMd from './Description.md';

export { Scanner } from './stories/Scanner-index.stories';

export default {
  title: 'Components/Icons/Scanner',
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
