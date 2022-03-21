import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Whatshot';
import descriptionMd from './Description.md';

export { Whatshot } from './stories/Whatshot-index.stories';

export default {
  title: 'Components/Icons/Whatshot',
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
