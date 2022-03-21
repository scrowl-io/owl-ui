import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './PermMedia';
import descriptionMd from './Description.md';

export { PermMedia } from './stories/PermMedia-index.stories';

export default {
  title: 'Components/Icons/PermMedia',
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
