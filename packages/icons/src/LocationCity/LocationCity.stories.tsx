import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './LocationCity';
import descriptionMd from './Description.md';

export { LocationCity } from './stories/LocationCity-index.stories';

export default {
  title: 'Components/Icons/LocationCity',
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
