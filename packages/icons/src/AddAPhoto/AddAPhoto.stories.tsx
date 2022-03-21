import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './AddAPhoto';
import descriptionMd from './Description.md';

export { AddAPhoto } from './stories/AddAPhoto-index.stories';

export default {
  title: 'Components/Icons/AddAPhoto',
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
