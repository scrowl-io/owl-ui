import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './SubdirectoryArrowLeft';
import descriptionMd from './Description.md';

export { SubdirectoryArrowLeft } from './stories/SubdirectoryArrowLeft-index.stories';

export default {
  title: 'Components/Icons/SubdirectoryArrowLeft',
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
