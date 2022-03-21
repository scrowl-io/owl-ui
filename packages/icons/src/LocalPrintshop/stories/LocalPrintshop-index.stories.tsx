import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLocalPrintshopProps } from '../LocalPrintshop.types';

import { display } from './LocalPrintshop-display.stories';
import { appearance } from './LocalPrintshop-appearance.stories';
import { size } from './LocalPrintshop-size.stories';
import { theme } from './LocalPrintshop-theme.stories';

export const LocalPrintshop = (args: IconsLocalPrintshopProps) => (
  <Icon {...args}></Icon>
);

LocalPrintshop.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LocalPrintshop.argTypes = {
  display,
  appearance,
  size,
  theme,
};
