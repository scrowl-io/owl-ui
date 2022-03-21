import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './RadioButtonChecked';
import descriptionMd from './Description.md';

export { RadioButtonChecked } from './stories/RadioButtonChecked-index.stories';

export default {
  title: 'Components/Icons/RadioButtonChecked',
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
