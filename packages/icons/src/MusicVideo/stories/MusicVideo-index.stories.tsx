import * as React from 'react';
import { component as Icon } from '../index';
import { IconsMusicVideoProps } from '../MusicVideo.types';

import { display } from './MusicVideo-display.stories';
import { appearance } from './MusicVideo-appearance.stories';
import { size } from './MusicVideo-size.stories';
import { theme } from './MusicVideo-theme.stories';

export const MusicVideo = (args: IconsMusicVideoProps) => (
  <Icon {...args}></Icon>
);

MusicVideo.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

MusicVideo.argTypes = {
  display,
  appearance,
  size,
  theme,
};
