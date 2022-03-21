import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Web';
import descriptionMd from './Description.md';

export { Web } from './stories/Web-index.stories';

export default {
  title: 'Components/Icons/Web',
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
