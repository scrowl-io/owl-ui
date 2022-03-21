import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './SwitchVideo';
import descriptionMd from './Description.md';

export { SwitchVideo } from './stories/SwitchVideo-index.stories';

export default {
  title: 'Components/Icons/SwitchVideo',
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
