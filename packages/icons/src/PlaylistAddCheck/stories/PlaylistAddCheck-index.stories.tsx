import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPlaylistAddCheckProps } from '../PlaylistAddCheck.types';

import { display } from './PlaylistAddCheck-display.stories';
import { appearance } from './PlaylistAddCheck-appearance.stories';
import { size } from './PlaylistAddCheck-size.stories';
import { theme } from './PlaylistAddCheck-theme.stories';

export const PlaylistAddCheck = (args: IconsPlaylistAddCheckProps) => (
  <Icon {...args}></Icon>
);

PlaylistAddCheck.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PlaylistAddCheck.argTypes = {
  display,
  appearance,
  size,
  theme,
};
