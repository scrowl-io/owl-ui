import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Pets';
import descriptionMd from './Description.md';

export { Pets } from './stories/Pets-index.stories';

export default {
  title: 'Components/Icons/Pets',
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
