import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './UnfoldLess';
import descriptionMd from './Description.md';

export { UnfoldLess } from './stories/UnfoldLess-index.stories';

export default {
  title: 'Components/Icons/UnfoldLess',
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
