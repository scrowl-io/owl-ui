/* eslint-disable import/named */
import * as React from 'react';
import { Meta } from '@storybook/react';
import { Nav } from './Default';
import descriptionMd from './Description.md';

export { Default } from './stories/Default-index.stories';

export default {
  title: 'Components/Nav/Default',
  component: Nav,
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
