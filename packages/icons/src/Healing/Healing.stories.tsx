import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Healing';
import descriptionMd from './Description.md';

export { Healing } from './stories/Healing-index.stories';

export default {
  title: 'Components/Icons/Healing',
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
