import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './CenterFocusStrong';
import descriptionMd from './Description.md';

export { CenterFocusStrong } from './stories/CenterFocusStrong-index.stories';

export default {
  title: 'Components/Icons/CenterFocusStrong',
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
