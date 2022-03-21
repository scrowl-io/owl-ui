import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './CardTravel';
import descriptionMd from './Description.md';

export { CardTravel } from './stories/CardTravel-index.stories';

export default {
  title: 'Components/Icons/CardTravel',
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
