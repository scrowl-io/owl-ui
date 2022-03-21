import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './BorderColor';
import descriptionMd from './Description.md';

export { BorderColor } from './stories/BorderColor-index.stories';

export default {
  title: 'Components/Icons/BorderColor',
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
