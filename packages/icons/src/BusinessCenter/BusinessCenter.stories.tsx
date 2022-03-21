import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './BusinessCenter';
import descriptionMd from './Description.md';

export { BusinessCenter } from './stories/BusinessCenter-index.stories';

export default {
  title: 'Components/Icons/BusinessCenter',
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
