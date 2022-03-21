import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Place';
import descriptionMd from './Description.md';

export { Place } from './stories/Place-index.stories';

export default {
  title: 'Components/Icons/Place',
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
