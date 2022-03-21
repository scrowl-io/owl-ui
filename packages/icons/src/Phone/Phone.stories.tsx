import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Phone';
import descriptionMd from './Description.md';

export { Phone } from './stories/Phone-index.stories';

export default {
  title: 'Components/Icons/Phone',
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
