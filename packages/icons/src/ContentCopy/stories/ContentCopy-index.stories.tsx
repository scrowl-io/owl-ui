import * as React from 'react';
import { component as Icon } from '../index';
import { IconsContentCopyProps } from '../ContentCopy.types';

import { display } from './ContentCopy-display.stories';
import { appearance } from './ContentCopy-appearance.stories';
import { size } from './ContentCopy-size.stories';
import { theme } from './ContentCopy-theme.stories';

export const ContentCopy = (args: IconsContentCopyProps) => (
  <Icon {...args}></Icon>
);

ContentCopy.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ContentCopy.argTypes = {
  display,
  appearance,
  size,
  theme,
};
