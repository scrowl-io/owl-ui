import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './KeyboardArrowRight';
import descriptionMd from './Description.md';

export { KeyboardArrowRight } from './stories/KeyboardArrowRight-index.stories';

export default {
  title: 'Components/Icons/KeyboardArrowRight',
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
