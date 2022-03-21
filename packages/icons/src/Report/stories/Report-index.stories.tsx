import * as React from 'react';
import { component as Icon } from '../index';
import { IconsReportProps } from '../Report.types';

import { display } from './Report-display.stories';
import { appearance } from './Report-appearance.stories';
import { size } from './Report-size.stories';
import { theme } from './Report-theme.stories';

export const Report = (args: IconsReportProps) => (
  <Icon {...args}></Icon>
);

Report.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Report.argTypes = {
  display,
  appearance,
  size,
  theme,
};
