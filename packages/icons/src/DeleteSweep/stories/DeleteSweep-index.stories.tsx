import * as React from 'react';
import { component as Icon } from '../index';
import { IconsDeleteSweepProps } from '../DeleteSweep.types';

import { display } from './DeleteSweep-display.stories';
import { appearance } from './DeleteSweep-appearance.stories';
import { size } from './DeleteSweep-size.stories';
import { theme } from './DeleteSweep-theme.stories';

export const DeleteSweep = (args: IconsDeleteSweepProps) => (
  <Icon {...args}></Icon>
);

DeleteSweep.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

DeleteSweep.argTypes = {
  display,
  appearance,
  size,
  theme,
};
