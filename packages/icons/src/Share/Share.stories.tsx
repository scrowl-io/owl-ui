import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Share';
import descriptionMd from './Description.md';

export { Share } from './stories/Share-index.stories';

export default {
  title: 'Components/Icons/Share',
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
