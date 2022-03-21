import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Eject';
import descriptionMd from './Description.md';

export { Eject } from './stories/Eject-index.stories';

export default {
  title: 'Components/Icons/Eject',
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
