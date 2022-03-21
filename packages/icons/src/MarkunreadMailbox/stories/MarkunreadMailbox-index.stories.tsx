import * as React from 'react';
import { component as Icon } from '../index';
import { IconsMarkunreadMailboxProps } from '../MarkunreadMailbox.types';

import { display } from './MarkunreadMailbox-display.stories';
import { appearance } from './MarkunreadMailbox-appearance.stories';
import { size } from './MarkunreadMailbox-size.stories';
import { theme } from './MarkunreadMailbox-theme.stories';

export const MarkunreadMailbox = (args: IconsMarkunreadMailboxProps) => (
  <Icon {...args}></Icon>
);

MarkunreadMailbox.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

MarkunreadMailbox.argTypes = {
  display,
  appearance,
  size,
  theme,
};
