import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSubjectProps } from '../Subject.types';

import { display } from './Subject-display.stories';
import { appearance } from './Subject-appearance.stories';
import { size } from './Subject-size.stories';
import { theme } from './Subject-theme.stories';

export const Subject = (args: IconsSubjectProps) => (
  <Icon {...args}></Icon>
);

Subject.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Subject.argTypes = {
  display,
  appearance,
  size,
  theme,
};
