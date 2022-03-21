import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Http';
import descriptionMd from './Description.md';

export { Http } from './stories/Http-index.stories';

export default {
  title: 'Components/Icons/Http',
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
