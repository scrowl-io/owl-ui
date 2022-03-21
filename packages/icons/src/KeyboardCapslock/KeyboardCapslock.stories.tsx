import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './KeyboardCapslock';
import descriptionMd from './Description.md';

export { KeyboardCapslock } from './stories/KeyboardCapslock-index.stories';

export default {
  title: 'Components/Icons/KeyboardCapslock',
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
