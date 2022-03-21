import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './ControlPointDuplicate';
import descriptionMd from './Description.md';

export { ControlPointDuplicate } from './stories/ControlPointDuplicate-index.stories';

export default {
  title: 'Components/Icons/ControlPointDuplicate',
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
