import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './VerifiedUser';
import descriptionMd from './Description.md';

export { VerifiedUser } from './stories/VerifiedUser-index.stories';

export default {
  title: 'Components/Icons/VerifiedUser',
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
