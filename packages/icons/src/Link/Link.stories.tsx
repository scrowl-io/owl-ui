import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Link';
import descriptionMd from './Description.md';

export { Link } from './stories/Link-index.stories';

export default {
  title: 'Components/Icons/Link',
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
