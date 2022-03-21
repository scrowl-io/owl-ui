import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './NavigateNext';
import descriptionMd from './Description.md';

export { NavigateNext } from './stories/NavigateNext-index.stories';

export default {
  title: 'Components/Icons/NavigateNext',
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
