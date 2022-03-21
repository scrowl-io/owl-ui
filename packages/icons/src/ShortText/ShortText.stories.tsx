import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './ShortText';
import descriptionMd from './Description.md';

export { ShortText } from './stories/ShortText-index.stories';

export default {
  title: 'Components/Icons/ShortText',
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
