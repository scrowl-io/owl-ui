import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './FormatTextdirectionRToL';
import descriptionMd from './Description.md';

export { FormatTextdirectionRToL } from './stories/FormatTextdirectionRToL-index.stories';

export default {
  title: 'Components/Icons/FormatTextdirectionRToL',
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
