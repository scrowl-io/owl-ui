import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './LocalMall';
import descriptionMd from './Description.md';

export { LocalMall } from './stories/LocalMall-index.stories';

export default {
  title: 'Components/Icons/LocalMall',
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
