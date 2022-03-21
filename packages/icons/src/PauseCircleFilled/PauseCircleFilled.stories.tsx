import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './PauseCircleFilled';
import descriptionMd from './Description.md';

export { PauseCircleFilled } from './stories/PauseCircleFilled-index.stories';

export default {
  title: 'Components/Icons/PauseCircleFilled',
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
