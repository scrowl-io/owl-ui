import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './NewReleases';
import descriptionMd from './Description.md';

export { NewReleases } from './stories/NewReleases-index.stories';

export default {
  title: 'Components/Icons/NewReleases',
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
