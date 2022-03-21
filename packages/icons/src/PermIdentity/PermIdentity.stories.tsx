import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './PermIdentity';
import descriptionMd from './Description.md';

export { PermIdentity } from './stories/PermIdentity-index.stories';

export default {
  title: 'Components/Icons/PermIdentity',
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
