import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './ConfirmationNumber';
import descriptionMd from './Description.md';

export { ConfirmationNumber } from './stories/ConfirmationNumber-index.stories';

export default {
  title: 'Components/Icons/ConfirmationNumber',
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
