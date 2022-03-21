import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAcUnitProps } from '../AcUnit.types';

import { display } from './AcUnit-display.stories';
import { appearance } from './AcUnit-appearance.stories';
import { size } from './AcUnit-size.stories';
import { theme } from './AcUnit-theme.stories';

export const AcUnit = (args: IconsAcUnitProps) => (
  <Icon {...args}></Icon>
);

AcUnit.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

AcUnit.argTypes = {
  display,
  appearance,
  size,
  theme,
};
