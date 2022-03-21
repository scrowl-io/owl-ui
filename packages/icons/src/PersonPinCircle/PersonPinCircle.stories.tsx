import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './PersonPinCircle';
import descriptionMd from './Description.md';

export { PersonPinCircle } from './stories/PersonPinCircle-index.stories';

export default {
  title: 'Components/Icons/PersonPinCircle',
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
