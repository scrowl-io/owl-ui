import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Sms';
import descriptionMd from './Description.md';

export { Sms } from './stories/Sms-index.stories';

export default {
  title: 'Components/Icons/Sms',
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
