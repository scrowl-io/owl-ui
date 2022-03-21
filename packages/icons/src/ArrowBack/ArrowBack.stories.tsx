import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './ArrowBack';
import descriptionMd from './Description.md';

export { ArrowBack } from './stories/ArrowBack-index.stories';

export default {
  title: 'Components/Icons/ArrowBack',
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
