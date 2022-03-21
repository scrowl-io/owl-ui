import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './ViewModule';
import descriptionMd from './Description.md';

export { ViewModule } from './stories/ViewModule-index.stories';

export default {
  title: 'Components/Icons/ViewModule',
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
