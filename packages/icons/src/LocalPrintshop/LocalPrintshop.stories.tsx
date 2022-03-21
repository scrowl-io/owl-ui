import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './LocalPrintshop';
import descriptionMd from './Description.md';

export { LocalPrintshop } from './stories/LocalPrintshop-index.stories';

export default {
  title: 'Components/Icons/LocalPrintshop',
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
