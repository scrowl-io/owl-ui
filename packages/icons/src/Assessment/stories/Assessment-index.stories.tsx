import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAssessmentProps } from '../Assessment.types';

import { display } from './Assessment-display.stories';
import { appearance } from './Assessment-appearance.stories';
import { size } from './Assessment-size.stories';
import { theme } from './Assessment-theme.stories';

export const Assessment = (args: IconsAssessmentProps) => (
  <Icon {...args}></Icon>
);

Assessment.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Assessment.argTypes = {
  display,
  appearance,
  size,
  theme,
};
