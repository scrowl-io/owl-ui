import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './InsertLink';
import descriptionMd from './Description.md';

export { InsertLink } from './stories/InsertLink-index.stories';

export default {
  title: 'Components/Icons/InsertLink',
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
