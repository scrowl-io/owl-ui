import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Palette';
import descriptionMd from './Description.md';

export { Palette } from './stories/Palette-index.stories';

export default {
  title: 'Components/Icons/Palette',
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
