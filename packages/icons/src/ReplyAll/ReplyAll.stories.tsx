import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './ReplyAll';
import descriptionMd from './Description.md';

export { ReplyAll } from './stories/ReplyAll-index.stories';

export default {
  title: 'Components/Icons/ReplyAll',
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
