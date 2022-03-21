import * as React from 'react';
import { component as Icon } from '../index';
import { IconsChildCareProps } from '../ChildCare.types';

import { display } from './ChildCare-display.stories';
import { appearance } from './ChildCare-appearance.stories';
import { size } from './ChildCare-size.stories';
import { theme } from './ChildCare-theme.stories';

export const ChildCare = (args: IconsChildCareProps) => (
  <Icon {...args}></Icon>
);

ChildCare.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ChildCare.argTypes = {
  display,
  appearance,
  size,
  theme,
};
