import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './PersonalVideo';
import descriptionMd from './Description.md';

export { PersonalVideo } from './stories/PersonalVideo-index.stories';

export default {
  title: 'Components/Icons/PersonalVideo',
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
