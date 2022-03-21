import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPlaylistPlayProps } from '../PlaylistPlay.types';

import { display } from './PlaylistPlay-display.stories';
import { appearance } from './PlaylistPlay-appearance.stories';
import { size } from './PlaylistPlay-size.stories';
import { theme } from './PlaylistPlay-theme.stories';

export const PlaylistPlay = (args: IconsPlaylistPlayProps) => (
  <Icon {...args}></Icon>
);

PlaylistPlay.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PlaylistPlay.argTypes = {
  display,
  appearance,
  size,
  theme,
};
