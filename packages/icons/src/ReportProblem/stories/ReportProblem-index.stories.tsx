import * as React from 'react';
import { component as Icon } from '../index';
import { IconsReportProblemProps } from '../ReportProblem.types';

import { display } from './ReportProblem-display.stories';
import { appearance } from './ReportProblem-appearance.stories';
import { size } from './ReportProblem-size.stories';
import { theme } from './ReportProblem-theme.stories';

export const ReportProblem = (args: IconsReportProblemProps) => (
  <Icon {...args}></Icon>
);

ReportProblem.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ReportProblem.argTypes = {
  display,
  appearance,
  size,
  theme,
};
