import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './InvertColorsOff';
import descriptionMd from './Description.md';

export { InvertColorsOff } from './stories/InvertColorsOff-index.stories';

export default {
  title: 'Components/Icons/InvertColorsOff',
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
