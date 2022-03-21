import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSwitchVideoProps } from '../SwitchVideo.types';

import { display } from './SwitchVideo-display.stories';
import { appearance } from './SwitchVideo-appearance.stories';
import { size } from './SwitchVideo-size.stories';
import { theme } from './SwitchVideo-theme.stories';

export const SwitchVideo = (args: IconsSwitchVideoProps) => (
  <Icon {...args}></Icon>
);

SwitchVideo.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SwitchVideo.argTypes = {
  display,
  appearance,
  size,
  theme,
};
