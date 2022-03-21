import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './CallEnd';
import descriptionMd from './Description.md';

export { CallEnd } from './stories/CallEnd-index.stories';

export default {
  title: 'Components/Icons/CallEnd',
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
