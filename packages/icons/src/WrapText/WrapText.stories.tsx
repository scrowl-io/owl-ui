import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './WrapText';
import descriptionMd from './Description.md';

export { WrapText } from './stories/WrapText-index.stories';

export default {
  title: 'Components/Icons/WrapText',
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
