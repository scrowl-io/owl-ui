import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Face';
import descriptionMd from './Description.md';

export { Face } from './stories/Face-index.stories';

export default {
  title: 'Components/Icons/Face',
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
