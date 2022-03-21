import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './AllInclusive';
import descriptionMd from './Description.md';

export { AllInclusive } from './stories/AllInclusive-index.stories';

export default {
  title: 'Components/Icons/AllInclusive',
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
