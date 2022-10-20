/* eslint-disable import/named */
import * as React from 'react';
import { Meta } from '@storybook/react';
import { Tooltip } from './Default';
import descriptionMd from './Description.md';

export { Default } from './stories/Default-index.stories';

export default {
  title: 'Components/Tooltip/Default',
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component: [descriptionMd].join('/n'),
      },
    },
  },
  decorators: [
    Story => (
      <div
        style={{
          marginTop: '15rem',
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta;
