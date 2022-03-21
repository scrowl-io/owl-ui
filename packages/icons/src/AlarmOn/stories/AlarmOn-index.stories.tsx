import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAlarmOnProps } from '../AlarmOn.types';

import { display } from './AlarmOn-display.stories';
import { appearance } from './AlarmOn-appearance.stories';
import { size } from './AlarmOn-size.stories';
import { theme } from './AlarmOn-theme.stories';

export const AlarmOn = (args: IconsAlarmOnProps) => (
  <Icon {...args}></Icon>
);

AlarmOn.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

AlarmOn.argTypes = {
  display,
  appearance,
  size,
  theme,
};
