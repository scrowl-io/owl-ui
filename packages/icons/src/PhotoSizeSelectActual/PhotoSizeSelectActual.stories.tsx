import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './PhotoSizeSelectActual';
import descriptionMd from './Description.md';

export { PhotoSizeSelectActual } from './stories/PhotoSizeSelectActual-index.stories';

export default {
  title: 'Components/Icons/PhotoSizeSelectActual',
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
