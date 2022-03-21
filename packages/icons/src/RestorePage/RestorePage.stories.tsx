import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './RestorePage';
import descriptionMd from './Description.md';

export { RestorePage } from './stories/RestorePage-index.stories';

export default {
  title: 'Components/Icons/RestorePage',
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
