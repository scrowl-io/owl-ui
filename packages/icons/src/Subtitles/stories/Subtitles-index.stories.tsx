import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSubtitlesProps } from '../Subtitles.types';

import { display } from './Subtitles-display.stories';
import { appearance } from './Subtitles-appearance.stories';
import { size } from './Subtitles-size.stories';
import { theme } from './Subtitles-theme.stories';

export const Subtitles = (args: IconsSubtitlesProps) => (
  <Icon {...args}></Icon>
);

Subtitles.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Subtitles.argTypes = {
  display,
  appearance,
  size,
  theme,
};
