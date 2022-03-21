import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './HelpOutline';
import descriptionMd from './Description.md';

export { HelpOutline } from './stories/HelpOutline-index.stories';

export default {
  title: 'Components/Icons/HelpOutline',
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
