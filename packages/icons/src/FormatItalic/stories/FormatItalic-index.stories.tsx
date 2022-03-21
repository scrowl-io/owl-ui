import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFormatItalicProps } from '../FormatItalic.types';

import { display } from './FormatItalic-display.stories';
import { appearance } from './FormatItalic-appearance.stories';
import { size } from './FormatItalic-size.stories';
import { theme } from './FormatItalic-theme.stories';

export const FormatItalic = (args: IconsFormatItalicProps) => (
  <Icon {...args}></Icon>
);

FormatItalic.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FormatItalic.argTypes = {
  display,
  appearance,
  size,
  theme,
};
