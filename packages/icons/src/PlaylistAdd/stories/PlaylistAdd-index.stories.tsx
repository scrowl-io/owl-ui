import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPlaylistAddProps } from '../PlaylistAdd.types';

import { display } from './PlaylistAdd-display.stories';
import { appearance } from './PlaylistAdd-appearance.stories';
import { size } from './PlaylistAdd-size.stories';
import { theme } from './PlaylistAdd-theme.stories';

export const PlaylistAdd = (args: IconsPlaylistAddProps) => (
  <Icon {...args}></Icon>
);

PlaylistAdd.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PlaylistAdd.argTypes = {
  display,
  appearance,
  size,
  theme,
};
