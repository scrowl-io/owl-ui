import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Toc';
import descriptionMd from './Description.md';

export { Toc } from './stories/Toc-index.stories';

export default {
  title: 'Components/Icons/Toc',
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
