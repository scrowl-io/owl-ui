import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './GroupWork';
import descriptionMd from './Description.md';

export { GroupWork } from './stories/GroupWork-index.stories';

export default {
  title: 'Components/Icons/GroupWork',
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
