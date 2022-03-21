import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './PersonOutline';
import descriptionMd from './Description.md';

export { PersonOutline } from './stories/PersonOutline-index.stories';

export default {
  title: 'Components/Icons/PersonOutline',
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
