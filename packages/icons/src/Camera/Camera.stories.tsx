import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Camera';
import descriptionMd from './Description.md';

export { Camera } from './stories/Camera-index.stories';

export default {
  title: 'Components/Icons/Camera',
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
