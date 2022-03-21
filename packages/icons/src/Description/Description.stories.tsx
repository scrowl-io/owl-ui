import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Description';
import descriptionMd from './Description.md';

export { Description } from './stories/Description-index.stories';

export default {
  title: 'Components/Icons/Description',
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
