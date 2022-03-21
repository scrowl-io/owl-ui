import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './IndeterminateCheckBox';
import descriptionMd from './Description.md';

export { IndeterminateCheckBox } from './stories/IndeterminateCheckBox-index.stories';

export default {
  title: 'Components/Icons/IndeterminateCheckBox',
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
