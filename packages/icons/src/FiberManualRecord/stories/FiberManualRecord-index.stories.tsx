import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFiberManualRecordProps } from '../FiberManualRecord.types';

import { display } from './FiberManualRecord-display.stories';
import { appearance } from './FiberManualRecord-appearance.stories';
import { size } from './FiberManualRecord-size.stories';
import { theme } from './FiberManualRecord-theme.stories';

export const FiberManualRecord = (args: IconsFiberManualRecordProps) => (
  <Icon {...args}></Icon>
);

FiberManualRecord.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FiberManualRecord.argTypes = {
  display,
  appearance,
  size,
  theme,
};
