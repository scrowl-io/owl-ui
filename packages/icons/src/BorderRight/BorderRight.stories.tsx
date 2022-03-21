import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './BorderRight';
import descriptionMd from './Description.md';

export { BorderRight } from './stories/BorderRight-index.stories';

export default {
  title: 'Components/Icons/BorderRight',
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
