import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './AssistantPhoto';
import descriptionMd from './Description.md';

export { AssistantPhoto } from './stories/AssistantPhoto-index.stories';

export default {
  title: 'Components/Icons/AssistantPhoto',
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
