import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './LastPage';
import descriptionMd from './Description.md';

export { LastPage } from './stories/LastPage-index.stories';

export default {
  title: 'Components/Icons/LastPage',
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
