import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Search';
import descriptionMd from './Description.md';

export { Search } from './stories/Search-index.stories';

export default {
  title: 'Components/Icons/Search',
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
