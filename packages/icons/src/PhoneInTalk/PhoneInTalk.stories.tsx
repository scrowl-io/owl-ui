import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './PhoneInTalk';
import descriptionMd from './Description.md';

export { PhoneInTalk } from './stories/PhoneInTalk-index.stories';

export default {
  title: 'Components/Icons/PhoneInTalk',
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
