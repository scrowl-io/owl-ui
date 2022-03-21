import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPersonalVideoProps } from '../PersonalVideo.types';

import { display } from './PersonalVideo-display.stories';
import { appearance } from './PersonalVideo-appearance.stories';
import { size } from './PersonalVideo-size.stories';
import { theme } from './PersonalVideo-theme.stories';

export const PersonalVideo = (args: IconsPersonalVideoProps) => (
  <Icon {...args}></Icon>
);

PersonalVideo.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PersonalVideo.argTypes = {
  display,
  appearance,
  size,
  theme,
};
