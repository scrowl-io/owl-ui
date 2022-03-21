import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPregnantWomanProps } from '../PregnantWoman.types';

import { display } from './PregnantWoman-display.stories';
import { appearance } from './PregnantWoman-appearance.stories';
import { size } from './PregnantWoman-size.stories';
import { theme } from './PregnantWoman-theme.stories';

export const PregnantWoman = (args: IconsPregnantWomanProps) => (
  <Icon {...args}></Icon>
);

PregnantWoman.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PregnantWoman.argTypes = {
  display,
  appearance,
  size,
  theme,
};
