import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Translate';
import descriptionMd from './Description.md';

export { Translate } from './stories/Translate-index.stories';

export default {
  title: 'Components/Icons/Translate',
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
