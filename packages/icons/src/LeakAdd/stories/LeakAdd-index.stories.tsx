import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLeakAddProps } from '../LeakAdd.types';

import { display } from './LeakAdd-display.stories';
import { appearance } from './LeakAdd-appearance.stories';
import { size } from './LeakAdd-size.stories';
import { theme } from './LeakAdd-theme.stories';

export const LeakAdd = (args: IconsLeakAddProps) => (
  <Icon {...args}></Icon>
);

LeakAdd.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LeakAdd.argTypes = {
  display,
  appearance,
  size,
  theme,
};
