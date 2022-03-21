import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './PhotoCamera';
import descriptionMd from './Description.md';

export { PhotoCamera } from './stories/PhotoCamera-index.stories';

export default {
  title: 'Components/Icons/PhotoCamera',
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
