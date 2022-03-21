import * as React from 'react';
import { component as Icon } from '../index';
import { IconsGetAppProps } from '../GetApp.types';

import { display } from './GetApp-display.stories';
import { appearance } from './GetApp-appearance.stories';
import { size } from './GetApp-size.stories';
import { theme } from './GetApp-theme.stories';

export const GetApp = (args: IconsGetAppProps) => (
  <Icon {...args}></Icon>
);

GetApp.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

GetApp.argTypes = {
  display,
  appearance,
  size,
  theme,
};
