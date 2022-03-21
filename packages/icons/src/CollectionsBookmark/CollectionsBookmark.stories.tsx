import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './CollectionsBookmark';
import descriptionMd from './Description.md';

export { CollectionsBookmark } from './stories/CollectionsBookmark-index.stories';

export default {
  title: 'Components/Icons/CollectionsBookmark',
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
