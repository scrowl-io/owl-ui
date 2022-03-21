import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Language';
import descriptionMd from './Description.md';

export { Language } from './stories/Language-index.stories';

export default {
  title: 'Components/Icons/Language',
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
