import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './PersonPin';
import descriptionMd from './Description.md';

export { PersonPin } from './stories/PersonPin-index.stories';

export default {
  title: 'Components/Icons/PersonPin',
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
