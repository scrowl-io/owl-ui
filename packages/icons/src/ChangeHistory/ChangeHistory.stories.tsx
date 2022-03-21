import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './ChangeHistory';
import descriptionMd from './Description.md';

export { ChangeHistory } from './stories/ChangeHistory-index.stories';

export default {
  title: 'Components/Icons/ChangeHistory',
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
