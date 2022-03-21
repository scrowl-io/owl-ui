import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './TextFields';
import descriptionMd from './Description.md';

export { TextFields } from './stories/TextFields-index.stories';

export default {
  title: 'Components/Icons/TextFields',
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
