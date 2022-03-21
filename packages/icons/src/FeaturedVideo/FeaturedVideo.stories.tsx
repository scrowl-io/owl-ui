import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './FeaturedVideo';
import descriptionMd from './Description.md';

export { FeaturedVideo } from './stories/FeaturedVideo-index.stories';

export default {
  title: 'Components/Icons/FeaturedVideo',
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
