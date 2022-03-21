import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Textsms';
import descriptionMd from './Description.md';

export { Textsms } from './stories/Textsms-index.stories';

export default {
  title: 'Components/Icons/Textsms',
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
