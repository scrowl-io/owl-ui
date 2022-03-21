import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Subject';
import descriptionMd from './Description.md';

export { Subject } from './stories/Subject-index.stories';

export default {
  title: 'Components/Icons/Subject',
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
