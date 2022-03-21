import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './InsertInvitation';
import descriptionMd from './Description.md';

export { InsertInvitation } from './stories/InsertInvitation-index.stories';

export default {
  title: 'Components/Icons/InsertInvitation',
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
