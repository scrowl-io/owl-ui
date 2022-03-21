import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './PhotoFilter';
import descriptionMd from './Description.md';

export { PhotoFilter } from './stories/PhotoFilter-index.stories';

export default {
  title: 'Components/Icons/PhotoFilter',
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
