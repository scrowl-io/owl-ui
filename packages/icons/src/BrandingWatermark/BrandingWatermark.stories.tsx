import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './BrandingWatermark';
import descriptionMd from './Description.md';

export { BrandingWatermark } from './stories/BrandingWatermark-index.stories';

export default {
  title: 'Components/Icons/BrandingWatermark',
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
