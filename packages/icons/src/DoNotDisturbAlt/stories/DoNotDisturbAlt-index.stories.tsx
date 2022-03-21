import * as React from 'react';
import { component as Icon } from '../index';
import { IconsDoNotDisturbAltProps } from '../DoNotDisturbAlt.types';

import { display } from './DoNotDisturbAlt-display.stories';
import { appearance } from './DoNotDisturbAlt-appearance.stories';
import { size } from './DoNotDisturbAlt-size.stories';
import { theme } from './DoNotDisturbAlt-theme.stories';

export const DoNotDisturbAlt = (args: IconsDoNotDisturbAltProps) => (
  <Icon {...args}></Icon>
);

DoNotDisturbAlt.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

DoNotDisturbAlt.argTypes = {
  display,
  appearance,
  size,
  theme,
};
