import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Email';
import descriptionMd from './Description.md';

export { Email } from './stories/Email-index.stories';

export default {
  title: 'Components/Icons/Email',
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
