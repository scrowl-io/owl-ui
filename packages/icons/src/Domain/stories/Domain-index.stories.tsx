import * as React from 'react';
import { component as Icon } from '../index';
import { IconsDomainProps } from '../Domain.types';

import { display } from './Domain-display.stories';
import { appearance } from './Domain-appearance.stories';
import { size } from './Domain-size.stories';
import { theme } from './Domain-theme.stories';

export const Domain = (args: IconsDomainProps) => (
  <Icon {...args}></Icon>
);

Domain.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Domain.argTypes = {
  display,
  appearance,
  size,
  theme,
};
