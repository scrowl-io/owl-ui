import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Save';
import descriptionMd from './Description.md';

export { Save } from './stories/Save-index.stories';

export default {
  title: 'Components/Icons/Save',
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
