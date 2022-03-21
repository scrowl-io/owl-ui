import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './MergeType';
import descriptionMd from './Description.md';

export { MergeType } from './stories/MergeType-index.stories';

export default {
  title: 'Components/Icons/MergeType',
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
