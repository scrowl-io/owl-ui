import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Audiotrack';
import descriptionMd from './Description.md';

export { Audiotrack } from './stories/Audiotrack-index.stories';

export default {
  title: 'Components/Icons/Audiotrack',
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
