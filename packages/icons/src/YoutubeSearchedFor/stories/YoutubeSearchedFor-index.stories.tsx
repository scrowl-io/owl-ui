import * as React from 'react';
import { component as Icon } from '../index';
import { IconsYoutubeSearchedForProps } from '../YoutubeSearchedFor.types';

import { display } from './YoutubeSearchedFor-display.stories';
import { appearance } from './YoutubeSearchedFor-appearance.stories';
import { size } from './YoutubeSearchedFor-size.stories';
import { theme } from './YoutubeSearchedFor-theme.stories';

export const YoutubeSearchedFor = (args: IconsYoutubeSearchedForProps) => (
  <Icon {...args}></Icon>
);

YoutubeSearchedFor.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

YoutubeSearchedFor.argTypes = {
  display,
  appearance,
  size,
  theme,
};
