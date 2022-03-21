import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './DesktopWindows';
import descriptionMd from './Description.md';

export { DesktopWindows } from './stories/DesktopWindows-index.stories';

export default {
  title: 'Components/Icons/DesktopWindows',
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
