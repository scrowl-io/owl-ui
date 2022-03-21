import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './BorderAll';
import descriptionMd from './Description.md';

export { BorderAll } from './stories/BorderAll-index.stories';

export default {
  title: 'Components/Icons/BorderAll',
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
