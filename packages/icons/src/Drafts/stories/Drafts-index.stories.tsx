import * as React from 'react';
import { component as Icon } from '../index';
import { IconsDraftsProps } from '../Drafts.types';

import { display } from './Drafts-display.stories';
import { appearance } from './Drafts-appearance.stories';
import { size } from './Drafts-size.stories';
import { theme } from './Drafts-theme.stories';

export const Drafts = (args: IconsDraftsProps) => (
  <Icon {...args}></Icon>
);

Drafts.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Drafts.argTypes = {
  display,
  appearance,
  size,
  theme,
};
