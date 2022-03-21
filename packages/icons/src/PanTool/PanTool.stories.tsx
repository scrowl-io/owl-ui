import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './PanTool';
import descriptionMd from './Description.md';

export { PanTool } from './stories/PanTool-index.stories';

export default {
  title: 'Components/Icons/PanTool',
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
