import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Drafts';
import descriptionMd from './Description.md';

export { Drafts } from './stories/Drafts-index.stories';

export default {
  title: 'Components/Icons/Drafts',
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
