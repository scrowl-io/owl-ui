import * as React from 'react';
import { component as Icon } from '../index';
import { IconsArtTrackProps } from '../ArtTrack.types';

import { display } from './ArtTrack-display.stories';
import { appearance } from './ArtTrack-appearance.stories';
import { size } from './ArtTrack-size.stories';
import { theme } from './ArtTrack-theme.stories';

export const ArtTrack = (args: IconsArtTrackProps) => (
  <Icon {...args}></Icon>
);

ArtTrack.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ArtTrack.argTypes = {
  display,
  appearance,
  size,
  theme,
};
