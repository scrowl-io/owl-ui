import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './FindReplace';
import descriptionMd from './Description.md';

export { FindReplace } from './stories/FindReplace-index.stories';

export default {
  title: 'Components/Icons/FindReplace',
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
