import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './LocalPostOffice';
import descriptionMd from './Description.md';

export { LocalPostOffice } from './stories/LocalPostOffice-index.stories';

export default {
  title: 'Components/Icons/LocalPostOffice',
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
