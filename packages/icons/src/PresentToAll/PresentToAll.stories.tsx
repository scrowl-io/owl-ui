import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './PresentToAll';
import descriptionMd from './Description.md';

export { PresentToAll } from './stories/PresentToAll-index.stories';

export default {
  title: 'Components/Icons/PresentToAll',
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
