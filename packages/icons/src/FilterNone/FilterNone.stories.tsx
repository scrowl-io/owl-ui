import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './FilterNone';
import descriptionMd from './Description.md';

export { FilterNone } from './stories/FilterNone-index.stories';

export default {
  title: 'Components/Icons/FilterNone',
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
