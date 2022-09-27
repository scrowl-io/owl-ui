import * as React from 'react';
// eslint-disable-next-line import/named
import { Meta } from '@storybook/react';
import { Carousel } from './Default';
import descriptionMd from './Description.md';

export { Default } from './stories/Default-index.stories';

export default {
  title: 'Components/Carousel/Default',
  component: Carousel,
  parameters: {
    docs: {
      description: {
        component: [descriptionMd].join('/n'),
      },
    },
  },
  decorators: [
    Story => (
      <div
        style={{
          display: 'block',
          margin: 'auto',
          width: '70%',
          height: '300px',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta;
