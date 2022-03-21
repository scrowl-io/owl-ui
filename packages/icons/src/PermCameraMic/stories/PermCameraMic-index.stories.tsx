import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPermCameraMicProps } from '../PermCameraMic.types';

import { display } from './PermCameraMic-display.stories';
import { appearance } from './PermCameraMic-appearance.stories';
import { size } from './PermCameraMic-size.stories';
import { theme } from './PermCameraMic-theme.stories';

export const PermCameraMic = (args: IconsPermCameraMicProps) => (
  <Icon {...args}></Icon>
);

PermCameraMic.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PermCameraMic.argTypes = {
  display,
  appearance,
  size,
  theme,
};
