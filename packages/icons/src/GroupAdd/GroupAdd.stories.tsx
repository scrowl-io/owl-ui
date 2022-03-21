import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './GroupAdd';
import descriptionMd from './Description.md';

export { GroupAdd } from './stories/GroupAdd-index.stories';

export default {
  title: 'Components/Icons/GroupAdd',
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
