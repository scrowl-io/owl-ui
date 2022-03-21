import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './RadioButtonUnchecked';
import descriptionMd from './Description.md';

export { RadioButtonUnchecked } from './stories/RadioButtonUnchecked-index.stories';

export default {
  title: 'Components/Icons/RadioButtonUnchecked',
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
