import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './PermDataSetting';
import descriptionMd from './Description.md';

export { PermDataSetting } from './stories/PermDataSetting-index.stories';

export default {
  title: 'Components/Icons/PermDataSetting',
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
