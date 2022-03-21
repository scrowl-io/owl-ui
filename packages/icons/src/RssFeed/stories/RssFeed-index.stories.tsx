import * as React from 'react';
import { component as Icon } from '../index';
import { IconsRssFeedProps } from '../RssFeed.types';

import { display } from './RssFeed-display.stories';
import { appearance } from './RssFeed-appearance.stories';
import { size } from './RssFeed-size.stories';
import { theme } from './RssFeed-theme.stories';

export const RssFeed = (args: IconsRssFeedProps) => (
  <Icon {...args}></Icon>
);

RssFeed.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

RssFeed.argTypes = {
  display,
  appearance,
  size,
  theme,
};
