import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './CenterFocusWeak';
import descriptionMd from './Description.md';

export { CenterFocusWeak } from './stories/CenterFocusWeak-index.stories';

export default {
  title: 'Components/Icons/CenterFocusWeak',
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
