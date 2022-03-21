import * as React from 'react';
import { component as Icon } from '../index';
import { IconsGolfCourseProps } from '../GolfCourse.types';

import { display } from './GolfCourse-display.stories';
import { appearance } from './GolfCourse-appearance.stories';
import { size } from './GolfCourse-size.stories';
import { theme } from './GolfCourse-theme.stories';

export const GolfCourse = (args: IconsGolfCourseProps) => (
  <Icon {...args}></Icon>
);

GolfCourse.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

GolfCourse.argTypes = {
  display,
  appearance,
  size,
  theme,
};
