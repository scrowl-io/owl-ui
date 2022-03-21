import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Mms';
import descriptionMd from './Description.md';

export { Mms } from './stories/Mms-index.stories';

export default {
  title: 'Components/Icons/Mms',
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
