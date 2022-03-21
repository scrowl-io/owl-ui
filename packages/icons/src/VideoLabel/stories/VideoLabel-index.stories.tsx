import * as React from 'react';
import { component as Icon } from '../index';
import { IconsVideoLabelProps } from '../VideoLabel.types';

import { display } from './VideoLabel-display.stories';
import { appearance } from './VideoLabel-appearance.stories';
import { size } from './VideoLabel-size.stories';
import { theme } from './VideoLabel-theme.stories';

export const VideoLabel = (args: IconsVideoLabelProps) => (
  <Icon {...args}></Icon>
);

VideoLabel.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

VideoLabel.argTypes = {
  display,
  appearance,
  size,
  theme,
};
