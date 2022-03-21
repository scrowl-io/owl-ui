import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './BeachAccess';
import descriptionMd from './Description.md';

export { BeachAccess } from './stories/BeachAccess-index.stories';

export default {
  title: 'Components/Icons/BeachAccess',
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
