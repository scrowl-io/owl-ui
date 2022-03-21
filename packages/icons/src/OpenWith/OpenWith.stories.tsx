import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './OpenWith';
import descriptionMd from './Description.md';

export { OpenWith } from './stories/OpenWith-index.stories';

export default {
  title: 'Components/Icons/OpenWith',
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
