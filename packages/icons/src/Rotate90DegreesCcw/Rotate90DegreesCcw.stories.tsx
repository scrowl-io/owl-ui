import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Rotate90DegreesCcw';
import descriptionMd from './Description.md';

export { Rotate90DegreesCcw } from './stories/Rotate90DegreesCcw-index.stories';

export default {
  title: 'Components/Icons/Rotate90DegreesCcw',
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
