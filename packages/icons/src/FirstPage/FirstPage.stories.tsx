import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './FirstPage';
import descriptionMd from './Description.md';

export { FirstPage } from './stories/FirstPage-index.stories';

export default {
  title: 'Components/Icons/FirstPage',
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
