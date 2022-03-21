import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSdCardProps } from '../SdCard.types';

import { display } from './SdCard-display.stories';
import { appearance } from './SdCard-appearance.stories';
import { size } from './SdCard-size.stories';
import { theme } from './SdCard-theme.stories';

export const SdCard = (args: IconsSdCardProps) => (
  <Icon {...args}></Icon>
);

SdCard.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SdCard.argTypes = {
  display,
  appearance,
  size,
  theme,
};
