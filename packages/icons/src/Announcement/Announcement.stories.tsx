import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Announcement';
import descriptionMd from './Description.md';

export { Announcement } from './stories/Announcement-index.stories';

export default {
  title: 'Components/Icons/Announcement',
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
