import * as React from 'react';
// eslint-disable-next-line import/named
import { Meta } from '@storybook/react';
import { Component } from './Default';
import descriptionMd from './Description.md';

export { Default } from './stories/Default-index.stories';

export default {
  title: 'Components/Tabs/Default',
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
      <div>
        <Story />
      </div>
    ),
  ],
} as Meta;
