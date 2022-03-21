import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './ExpandLess';
import descriptionMd from './Description.md';

export { ExpandLess } from './stories/ExpandLess-index.stories';

export default {
  title: 'Components/Icons/ExpandLess',
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
