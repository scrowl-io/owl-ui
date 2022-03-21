import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './LocalPhone';
import descriptionMd from './Description.md';

export { LocalPhone } from './stories/LocalPhone-index.stories';

export default {
  title: 'Components/Icons/LocalPhone',
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
