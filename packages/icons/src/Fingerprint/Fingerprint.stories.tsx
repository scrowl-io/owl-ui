import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Fingerprint';
import descriptionMd from './Description.md';

export { Fingerprint } from './stories/Fingerprint-index.stories';

export default {
  title: 'Components/Icons/Fingerprint',
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
