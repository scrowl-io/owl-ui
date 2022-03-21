import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSpellcheckProps } from '../Spellcheck.types';

import { display } from './Spellcheck-display.stories';
import { appearance } from './Spellcheck-appearance.stories';
import { size } from './Spellcheck-size.stories';
import { theme } from './Spellcheck-theme.stories';

export const Spellcheck = (args: IconsSpellcheckProps) => (
  <Icon {...args}></Icon>
);

Spellcheck.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Spellcheck.argTypes = {
  display,
  appearance,
  size,
  theme,
};
