import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Kitchen';
import descriptionMd from './Description.md';

export { Kitchen } from './stories/Kitchen-index.stories';

export default {
  title: 'Components/Icons/Kitchen',
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
