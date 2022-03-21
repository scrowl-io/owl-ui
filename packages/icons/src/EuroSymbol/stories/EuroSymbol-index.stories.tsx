import * as React from 'react';
import { component as Icon } from '../index';
import { IconsEuroSymbolProps } from '../EuroSymbol.types';

import { display } from './EuroSymbol-display.stories';
import { appearance } from './EuroSymbol-appearance.stories';
import { size } from './EuroSymbol-size.stories';
import { theme } from './EuroSymbol-theme.stories';

export const EuroSymbol = (args: IconsEuroSymbolProps) => (
  <Icon {...args}></Icon>
);

EuroSymbol.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

EuroSymbol.argTypes = {
  display,
  appearance,
  size,
  theme,
};
