import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPauseCircleFilledProps } from '../PauseCircleFilled.types';

import { display } from './PauseCircleFilled-display.stories';
import { appearance } from './PauseCircleFilled-appearance.stories';
import { size } from './PauseCircleFilled-size.stories';
import { theme } from './PauseCircleFilled-theme.stories';

export const PauseCircleFilled = (args: IconsPauseCircleFilledProps) => (
  <Icon {...args}></Icon>
);

PauseCircleFilled.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PauseCircleFilled.argTypes = {
  display,
  appearance,
  size,
  theme,
};
