import * as React from 'react';
import { component as Icon } from '../index';
import { IconsOfflinePinProps } from '../OfflinePin.types';

import { display } from './OfflinePin-display.stories';
import { appearance } from './OfflinePin-appearance.stories';
import { size } from './OfflinePin-size.stories';
import { theme } from './OfflinePin-theme.stories';

export const OfflinePin = (args: IconsOfflinePinProps) => (
  <Icon {...args}></Icon>
);

OfflinePin.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

OfflinePin.argTypes = {
  display,
  appearance,
  size,
  theme,
};
