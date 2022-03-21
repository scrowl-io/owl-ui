import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './MailOutline';
import descriptionMd from './Description.md';

export { MailOutline } from './stories/MailOutline-index.stories';

export default {
  title: 'Components/Icons/MailOutline',
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
