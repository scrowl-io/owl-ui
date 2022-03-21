import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './GraphicEq';
import descriptionMd from './Description.md';

export { GraphicEq } from './stories/GraphicEq-index.stories';

export default {
  title: 'Components/Icons/GraphicEq',
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
