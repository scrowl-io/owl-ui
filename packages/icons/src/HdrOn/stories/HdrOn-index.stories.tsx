import * as React from 'react';
import { component as Icon } from '../index';
import { IconsHdrOnProps } from '../HdrOn.types';

import { display } from './HdrOn-display.stories';
import { appearance } from './HdrOn-appearance.stories';
import { size } from './HdrOn-size.stories';
import { theme } from './HdrOn-theme.stories';

export const HdrOn = (args: IconsHdrOnProps) => (
  <Icon {...args}></Icon>
);

HdrOn.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

HdrOn.argTypes = {
  display,
  appearance,
  size,
  theme,
};
