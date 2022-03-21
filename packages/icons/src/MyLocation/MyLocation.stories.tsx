import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './MyLocation';
import descriptionMd from './Description.md';

export { MyLocation } from './stories/MyLocation-index.stories';

export default {
  title: 'Components/Icons/MyLocation',
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
