import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './ImportContacts';
import descriptionMd from './Description.md';

export { ImportContacts } from './stories/ImportContacts-index.stories';

export default {
  title: 'Components/Icons/ImportContacts',
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
