import * as React from 'react';
// eslint-disable-next-line import/named
import { Meta } from '@storybook/react';
import { ProgressBar } from './Default';
import descriptionMd from './Description.md';

export { Default } from './stories/Default-index.stories';

export default {
  title: 'Components/ProgressBar/Default',
  component: ProgressBar,
  parameters: {
    docs: {
      description: {
        component: [descriptionMd].join('/n'),
      },
    },
  },
  decorators: [
    Story => (
      <div>
        <Story />
      </div>
    ),
  ],
} as Meta;
