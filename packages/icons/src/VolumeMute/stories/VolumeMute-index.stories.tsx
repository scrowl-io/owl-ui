import * as React from 'react';
import { component as Icon } from '../index';
import { IconsVolumeMuteProps } from '../VolumeMute.types';

import { display } from './VolumeMute-display.stories';
import { appearance } from './VolumeMute-appearance.stories';
import { size } from './VolumeMute-size.stories';
import { theme } from './VolumeMute-theme.stories';

export const VolumeMute = (args: IconsVolumeMuteProps) => (
  <Icon {...args}></Icon>
);

VolumeMute.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

VolumeMute.argTypes = {
  display,
  appearance,
  size,
  theme,
};
