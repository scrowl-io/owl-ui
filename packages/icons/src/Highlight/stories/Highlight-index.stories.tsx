import * as React from 'react';
import { component as Icon } from '../index';
import { IconsHighlightProps } from '../Highlight.types';

import { display } from './Highlight-display.stories';
import { appearance } from './Highlight-appearance.stories';
import { size } from './Highlight-size.stories';
import { theme } from './Highlight-theme.stories';

export const Highlight = (args: IconsHighlightProps) => (
  <Icon {...args}></Icon>
);

Highlight.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Highlight.argTypes = {
  display,
  appearance,
  size,
  theme,
};
