import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './NaturePeople';
import descriptionMd from './Description.md';

export { NaturePeople } from './stories/NaturePeople-index.stories';

export default {
  title: 'Components/Icons/NaturePeople',
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
