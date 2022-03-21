import * as React from 'react';
import { component as Icon } from '../index';
import { IconsMicNoneProps } from '../MicNone.types';

import { display } from './MicNone-display.stories';
import { appearance } from './MicNone-appearance.stories';
import { size } from './MicNone-size.stories';
import { theme } from './MicNone-theme.stories';

export const MicNone = (args: IconsMicNoneProps) => (
  <Icon {...args}></Icon>
);

MicNone.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

MicNone.argTypes = {
  display,
  appearance,
  size,
  theme,
};
