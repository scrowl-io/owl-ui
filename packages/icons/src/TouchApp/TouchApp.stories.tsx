import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './TouchApp';
import descriptionMd from './Description.md';

export { TouchApp } from './stories/TouchApp-index.stories';

export default {
  title: 'Components/Icons/TouchApp',
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
