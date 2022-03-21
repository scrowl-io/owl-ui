import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './DriveEta';
import descriptionMd from './Description.md';

export { DriveEta } from './stories/DriveEta-index.stories';

export default {
  title: 'Components/Icons/DriveEta',
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
