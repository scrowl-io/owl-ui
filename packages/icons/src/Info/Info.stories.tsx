import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Info';
import descriptionMd from './Description.md';

export { Info } from './stories/Info-index.stories';

export default {
  title: 'Components/Icons/Info',
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
