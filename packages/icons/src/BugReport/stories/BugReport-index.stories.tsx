import * as React from 'react';
import { component as Icon } from '../index';
import { IconsBugReportProps } from '../BugReport.types';

import { display } from './BugReport-display.stories';
import { appearance } from './BugReport-appearance.stories';
import { size } from './BugReport-size.stories';
import { theme } from './BugReport-theme.stories';

export const BugReport = (args: IconsBugReportProps) => (
  <Icon {...args}></Icon>
);

BugReport.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

BugReport.argTypes = {
  display,
  appearance,
  size,
  theme,
};
