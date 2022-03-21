import * as React from 'react';
import { component as Icon } from '../index';
import { IconsOndemandVideoProps } from '../OndemandVideo.types';

import { display } from './OndemandVideo-display.stories';
import { appearance } from './OndemandVideo-appearance.stories';
import { size } from './OndemandVideo-size.stories';
import { theme } from './OndemandVideo-theme.stories';

export const OndemandVideo = (args: IconsOndemandVideoProps) => (
  <Icon {...args}></Icon>
);

OndemandVideo.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

OndemandVideo.argTypes = {
  display,
  appearance,
  size,
  theme,
};
