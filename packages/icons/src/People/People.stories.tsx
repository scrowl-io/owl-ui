import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './People';
import descriptionMd from './Description.md';

export { People } from './stories/People-index.stories';

export default {
  title: 'Components/Icons/People',
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
