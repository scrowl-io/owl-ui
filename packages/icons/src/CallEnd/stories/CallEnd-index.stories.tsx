import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCallEndProps } from '../CallEnd.types';

import { display } from './CallEnd-display.stories';
import { appearance } from './CallEnd-appearance.stories';
import { size } from './CallEnd-size.stories';
import { theme } from './CallEnd-theme.stories';

export const CallEnd = (args: IconsCallEndProps) => (
  <Icon {...args}></Icon>
);

CallEnd.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

CallEnd.argTypes = {
  display,
  appearance,
  size,
  theme,
};
