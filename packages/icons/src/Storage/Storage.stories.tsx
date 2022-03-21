import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Storage';
import descriptionMd from './Description.md';

export { Storage } from './stories/Storage-index.stories';

export default {
  title: 'Components/Icons/Storage',
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
