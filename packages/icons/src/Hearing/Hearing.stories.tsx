import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Hearing';
import descriptionMd from './Description.md';

export { Hearing } from './stories/Hearing-index.stories';

export default {
  title: 'Components/Icons/Hearing',
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
