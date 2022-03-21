import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './InfoOutline';
import descriptionMd from './Description.md';

export { InfoOutline } from './stories/InfoOutline-index.stories';

export default {
  title: 'Components/Icons/InfoOutline',
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
