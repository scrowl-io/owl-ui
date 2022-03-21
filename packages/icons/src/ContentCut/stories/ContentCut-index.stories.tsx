import * as React from 'react';
import { component as Icon } from '../index';
import { IconsContentCutProps } from '../ContentCut.types';

import { display } from './ContentCut-display.stories';
import { appearance } from './ContentCut-appearance.stories';
import { size } from './ContentCut-size.stories';
import { theme } from './ContentCut-theme.stories';

export const ContentCut = (args: IconsContentCutProps) => (
  <Icon {...args}></Icon>
);

ContentCut.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ContentCut.argTypes = {
  display,
  appearance,
  size,
  theme,
};
