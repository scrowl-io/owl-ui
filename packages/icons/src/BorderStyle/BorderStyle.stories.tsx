import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './BorderStyle';
import descriptionMd from './Description.md';

export { BorderStyle } from './stories/BorderStyle-index.stories';

export default {
  title: 'Components/Icons/BorderStyle',
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
