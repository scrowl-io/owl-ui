import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Theaters';
import descriptionMd from './Description.md';

export { Theaters } from './stories/Theaters-index.stories';

export default {
  title: 'Components/Icons/Theaters',
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
