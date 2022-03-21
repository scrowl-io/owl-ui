import * as React from 'react';
import { component as Icon } from '../index';
import { IconsNotInterestedProps } from '../NotInterested.types';

import { display } from './NotInterested-display.stories';
import { appearance } from './NotInterested-appearance.stories';
import { size } from './NotInterested-size.stories';
import { theme } from './NotInterested-theme.stories';

export const NotInterested = (args: IconsNotInterestedProps) => (
  <Icon {...args}></Icon>
);

NotInterested.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

NotInterested.argTypes = {
  display,
  appearance,
  size,
  theme,
};
