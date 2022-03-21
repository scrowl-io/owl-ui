import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './FlashAuto';
import descriptionMd from './Description.md';

export { FlashAuto } from './stories/FlashAuto-index.stories';

export default {
  title: 'Components/Icons/FlashAuto',
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
