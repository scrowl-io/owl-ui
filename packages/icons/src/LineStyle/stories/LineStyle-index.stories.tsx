import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLineStyleProps } from '../LineStyle.types';

import { display } from './LineStyle-display.stories';
import { appearance } from './LineStyle-appearance.stories';
import { size } from './LineStyle-size.stories';
import { theme } from './LineStyle-theme.stories';

export const LineStyle = (args: IconsLineStyleProps) => (
  <Icon {...args}></Icon>
);

LineStyle.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LineStyle.argTypes = {
  display,
  appearance,
  size,
  theme,
};
