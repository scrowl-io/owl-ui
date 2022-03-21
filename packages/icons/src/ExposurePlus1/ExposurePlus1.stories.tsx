import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './ExposurePlus1';
import descriptionMd from './Description.md';

export { ExposurePlus1 } from './stories/ExposurePlus1-index.stories';

export default {
  title: 'Components/Icons/ExposurePlus1',
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
