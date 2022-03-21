import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Texture';
import descriptionMd from './Description.md';

export { Texture } from './stories/Texture-index.stories';

export default {
  title: 'Components/Icons/Texture',
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
