import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './AccountBox';
import descriptionMd from './Description.md';

export { AccountBox } from './stories/AccountBox-index.stories';

export default {
  title: 'Components/Icons/AccountBox',
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
