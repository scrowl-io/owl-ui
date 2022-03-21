import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Poll';
import descriptionMd from './Description.md';

export { Poll } from './stories/Poll-index.stories';

export default {
  title: 'Components/Icons/Poll',
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
