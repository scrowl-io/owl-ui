import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './FilterCenterFocus';
import descriptionMd from './Description.md';

export { FilterCenterFocus } from './stories/FilterCenterFocus-index.stories';

export default {
  title: 'Components/Icons/FilterCenterFocus',
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
