import * as React from 'react';
import { component as Icon } from '../index';
import { IconsStayPrimaryPortraitProps } from '../StayPrimaryPortrait.types';

import { display } from './StayPrimaryPortrait-display.stories';
import { appearance } from './StayPrimaryPortrait-appearance.stories';
import { size } from './StayPrimaryPortrait-size.stories';
import { theme } from './StayPrimaryPortrait-theme.stories';

export const StayPrimaryPortrait = (args: IconsStayPrimaryPortraitProps) => (
  <Icon {...args}></Icon>
);

StayPrimaryPortrait.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

StayPrimaryPortrait.argTypes = {
  display,
  appearance,
  size,
  theme,
};
