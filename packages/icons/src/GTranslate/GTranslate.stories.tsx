import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './GTranslate';
import descriptionMd from './Description.md';

export { GTranslate } from './stories/GTranslate-index.stories';

export default {
  title: 'Components/Icons/GTranslate',
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
