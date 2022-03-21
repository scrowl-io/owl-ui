import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Attachment';
import descriptionMd from './Description.md';

export { Attachment } from './stories/Attachment-index.stories';

export default {
  title: 'Components/Icons/Attachment',
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
