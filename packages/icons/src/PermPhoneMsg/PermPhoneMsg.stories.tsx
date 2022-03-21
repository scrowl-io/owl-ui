import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './PermPhoneMsg';
import descriptionMd from './Description.md';

export { PermPhoneMsg } from './stories/PermPhoneMsg-index.stories';

export default {
  title: 'Components/Icons/PermPhoneMsg',
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
