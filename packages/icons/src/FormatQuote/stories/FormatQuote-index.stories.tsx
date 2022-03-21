import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFormatQuoteProps } from '../FormatQuote.types';

import { display } from './FormatQuote-display.stories';
import { appearance } from './FormatQuote-appearance.stories';
import { size } from './FormatQuote-size.stories';
import { theme } from './FormatQuote-theme.stories';

export const FormatQuote = (args: IconsFormatQuoteProps) => (
  <Icon {...args}></Icon>
);

FormatQuote.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FormatQuote.argTypes = {
  display,
  appearance,
  size,
  theme,
};
