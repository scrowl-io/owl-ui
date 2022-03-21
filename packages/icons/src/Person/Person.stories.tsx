import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Person';
import descriptionMd from './Description.md';

export { Person } from './stories/Person-index.stories';

export default {
  title: 'Components/Icons/Person',
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
