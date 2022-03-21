import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Build';
import descriptionMd from './Description.md';

export { Build } from './stories/Build-index.stories';

export default {
  title: 'Components/Icons/Build',
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
