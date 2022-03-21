import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './WbSunny';
import descriptionMd from './Description.md';

export { WbSunny } from './stories/WbSunny-index.stories';

export default {
  title: 'Components/Icons/WbSunny',
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
