import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Looks4';
import descriptionMd from './Description.md';

export { Looks4 } from './stories/Looks4-index.stories';

export default {
  title: 'Components/Icons/Looks4',
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
