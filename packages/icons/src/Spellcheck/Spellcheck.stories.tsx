import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Spellcheck';
import descriptionMd from './Description.md';

export { Spellcheck } from './stories/Spellcheck-index.stories';

export default {
  title: 'Components/Icons/Spellcheck',
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
