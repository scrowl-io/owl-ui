import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './OndemandVideo';
import descriptionMd from './Description.md';

export { OndemandVideo } from './stories/OndemandVideo-index.stories';

export default {
  title: 'Components/Icons/OndemandVideo',
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
