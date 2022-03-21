import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Pageview';
import descriptionMd from './Description.md';

export { Pageview } from './stories/Pageview-index.stories';

export default {
  title: 'Components/Icons/Pageview',
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
