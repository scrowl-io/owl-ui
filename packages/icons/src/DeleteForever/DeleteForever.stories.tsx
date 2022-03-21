import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './DeleteForever';
import descriptionMd from './Description.md';

export { DeleteForever } from './stories/DeleteForever-index.stories';

export default {
  title: 'Components/Icons/DeleteForever',
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
