import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Tab';
import descriptionMd from './Description.md';

export { Tab } from './stories/Tab-index.stories';

export default {
  title: 'Components/Icons/Tab',
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
