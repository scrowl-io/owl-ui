import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './ArrowDropDownCircle';
import descriptionMd from './Description.md';

export { ArrowDropDownCircle } from './stories/ArrowDropDownCircle-index.stories';

export default {
  title: 'Components/Icons/ArrowDropDownCircle',
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
