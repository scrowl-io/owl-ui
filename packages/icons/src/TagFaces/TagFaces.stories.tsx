import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './TagFaces';
import descriptionMd from './Description.md';

export { TagFaces } from './stories/TagFaces-index.stories';

export default {
  title: 'Components/Icons/TagFaces',
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
