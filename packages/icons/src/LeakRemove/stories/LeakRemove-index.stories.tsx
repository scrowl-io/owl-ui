import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLeakRemoveProps } from '../LeakRemove.types';

import { display } from './LeakRemove-display.stories';
import { appearance } from './LeakRemove-appearance.stories';
import { size } from './LeakRemove-size.stories';
import { theme } from './LeakRemove-theme.stories';

export const LeakRemove = (args: IconsLeakRemoveProps) => (
  <Icon {...args}></Icon>
);

LeakRemove.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LeakRemove.argTypes = {
  display,
  appearance,
  size,
  theme,
};
