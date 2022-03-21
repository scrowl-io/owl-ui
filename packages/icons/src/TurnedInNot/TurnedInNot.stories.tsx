import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './TurnedInNot';
import descriptionMd from './Description.md';

export { TurnedInNot } from './stories/TurnedInNot-index.stories';

export default {
  title: 'Components/Icons/TurnedInNot',
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
