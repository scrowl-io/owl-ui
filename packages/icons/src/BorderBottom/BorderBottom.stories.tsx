import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './BorderBottom';
import descriptionMd from './Description.md';

export { BorderBottom } from './stories/BorderBottom-index.stories';

export default {
  title: 'Components/Icons/BorderBottom',
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
