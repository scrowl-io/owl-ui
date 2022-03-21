import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Dvr';
import descriptionMd from './Description.md';

export { Dvr } from './stories/Dvr-index.stories';

export default {
  title: 'Components/Icons/Dvr',
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
