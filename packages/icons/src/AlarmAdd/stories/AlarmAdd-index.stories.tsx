import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAlarmAddProps } from '../AlarmAdd.types';

import { display } from './AlarmAdd-display.stories';
import { appearance } from './AlarmAdd-appearance.stories';
import { size } from './AlarmAdd-size.stories';
import { theme } from './AlarmAdd-theme.stories';

export const AlarmAdd = (args: IconsAlarmAddProps) => (
  <Icon {...args}></Icon>
);

AlarmAdd.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

AlarmAdd.argTypes = {
  display,
  appearance,
  size,
  theme,
};
