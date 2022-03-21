import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Brightness1';
import descriptionMd from './Description.md';

export { Brightness1 } from './stories/Brightness1-index.stories';

export default {
  title: 'Components/Icons/Brightness1',
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
