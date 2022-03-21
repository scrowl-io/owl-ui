import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './CheckBox';
import descriptionMd from './Description.md';

export { CheckBox } from './stories/CheckBox-index.stories';

export default {
  title: 'Components/Icons/CheckBox',
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
