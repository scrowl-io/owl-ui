import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Default';
import descriptionMd from './Description.md';

export { Default } from './stories/Default-index.stories';

export default {
  title: 'Components/ProgressBar/Default',
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
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          height: '10vh',
          // width: '50%',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta;
