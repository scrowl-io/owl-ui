import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './BorderInner';
import descriptionMd from './Description.md';

export { BorderInner } from './stories/BorderInner-index.stories';

export default {
  title: 'Components/Icons/BorderInner',
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
