import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './CallToAction';
import descriptionMd from './Description.md';

export { CallToAction } from './stories/CallToAction-index.stories';

export default {
  title: 'Components/Icons/CallToAction',
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
