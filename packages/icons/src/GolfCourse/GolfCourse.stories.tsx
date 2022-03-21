import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './GolfCourse';
import descriptionMd from './Description.md';

export { GolfCourse } from './stories/GolfCourse-index.stories';

export default {
  title: 'Components/Icons/GolfCourse',
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
