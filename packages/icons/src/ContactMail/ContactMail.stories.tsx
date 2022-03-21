import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './ContactMail';
import descriptionMd from './Description.md';

export { ContactMail } from './stories/ContactMail-index.stories';

export default {
  title: 'Components/Icons/ContactMail',
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
