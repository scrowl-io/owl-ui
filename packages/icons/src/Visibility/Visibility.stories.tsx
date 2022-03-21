import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Visibility';
import descriptionMd from './Description.md';

export { Visibility } from './stories/Visibility-index.stories';

export default {
  title: 'Components/Icons/Visibility',
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
