import * as React from 'react';
import { component as Icon } from '../index';
import { IconsChangeHistoryProps } from '../ChangeHistory.types';

import { display } from './ChangeHistory-display.stories';
import { appearance } from './ChangeHistory-appearance.stories';
import { size } from './ChangeHistory-size.stories';
import { theme } from './ChangeHistory-theme.stories';

export const ChangeHistory = (args: IconsChangeHistoryProps) => (
  <Icon {...args}></Icon>
);

ChangeHistory.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ChangeHistory.argTypes = {
  display,
  appearance,
  size,
  theme,
};
