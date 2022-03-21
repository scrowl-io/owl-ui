import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './ImportExport';
import descriptionMd from './Description.md';

export { ImportExport } from './stories/ImportExport-index.stories';

export default {
  title: 'Components/Icons/ImportExport',
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
