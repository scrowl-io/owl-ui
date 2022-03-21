import * as React from 'react';
import { component as Icon } from '../index';
import { IconsDeveloperBoardProps } from '../DeveloperBoard.types';

import { display } from './DeveloperBoard-display.stories';
import { appearance } from './DeveloperBoard-appearance.stories';
import { size } from './DeveloperBoard-size.stories';
import { theme } from './DeveloperBoard-theme.stories';

export const DeveloperBoard = (args: IconsDeveloperBoardProps) => (
  <Icon {...args}></Icon>
);

DeveloperBoard.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

DeveloperBoard.argTypes = {
  display,
  appearance,
  size,
  theme,
};
