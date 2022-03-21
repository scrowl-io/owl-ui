import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Print';
import descriptionMd from './Description.md';

export { Print } from './stories/Print-index.stories';

export default {
  title: 'Components/Icons/Print',
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
