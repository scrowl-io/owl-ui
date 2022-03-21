import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSystemUpdateAltProps } from '../SystemUpdateAlt.types';

import { display } from './SystemUpdateAlt-display.stories';
import { appearance } from './SystemUpdateAlt-appearance.stories';
import { size } from './SystemUpdateAlt-size.stories';
import { theme } from './SystemUpdateAlt-theme.stories';

export const SystemUpdateAlt = (args: IconsSystemUpdateAltProps) => (
  <Icon {...args}></Icon>
);

SystemUpdateAlt.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SystemUpdateAlt.argTypes = {
  display,
  appearance,
  size,
  theme,
};
