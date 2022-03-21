import * as React from 'react';
import { component as Icon } from '../index';
import { IconsQueryBuilderProps } from '../QueryBuilder.types';

import { display } from './QueryBuilder-display.stories';
import { appearance } from './QueryBuilder-appearance.stories';
import { size } from './QueryBuilder-size.stories';
import { theme } from './QueryBuilder-theme.stories';

export const QueryBuilder = (args: IconsQueryBuilderProps) => (
  <Icon {...args}></Icon>
);

QueryBuilder.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

QueryBuilder.argTypes = {
  display,
  appearance,
  size,
  theme,
};
