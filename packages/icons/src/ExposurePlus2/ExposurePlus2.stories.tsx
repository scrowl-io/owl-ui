import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './ExposurePlus2';
import descriptionMd from './Description.md';

export { ExposurePlus2 } from './stories/ExposurePlus2-index.stories';

export default {
  title: 'Components/Icons/ExposurePlus2',
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
