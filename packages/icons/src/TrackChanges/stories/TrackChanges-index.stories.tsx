import * as React from 'react';
import { component as Icon } from '../index';
import { IconsTrackChangesProps } from '../TrackChanges.types';

import { display } from './TrackChanges-display.stories';
import { appearance } from './TrackChanges-appearance.stories';
import { size } from './TrackChanges-size.stories';
import { theme } from './TrackChanges-theme.stories';

export const TrackChanges = (args: IconsTrackChangesProps) => (
  <Icon {...args}></Icon>
);

TrackChanges.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

TrackChanges.argTypes = {
  display,
  appearance,
  size,
  theme,
};
