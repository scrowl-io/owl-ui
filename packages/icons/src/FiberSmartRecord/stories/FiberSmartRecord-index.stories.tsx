import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFiberSmartRecordProps } from '../FiberSmartRecord.types';

import { display } from './FiberSmartRecord-display.stories';
import { appearance } from './FiberSmartRecord-appearance.stories';
import { size } from './FiberSmartRecord-size.stories';
import { theme } from './FiberSmartRecord-theme.stories';

export const FiberSmartRecord = (args: IconsFiberSmartRecordProps) => (
  <Icon {...args}></Icon>
);

FiberSmartRecord.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FiberSmartRecord.argTypes = {
  display,
  appearance,
  size,
  theme,
};
