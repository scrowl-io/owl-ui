import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSentimentVeryDissatisfiedProps } from '../SentimentVeryDissatisfied.types';

import { display } from './SentimentVeryDissatisfied-display.stories';
import { appearance } from './SentimentVeryDissatisfied-appearance.stories';
import { size } from './SentimentVeryDissatisfied-size.stories';
import { theme } from './SentimentVeryDissatisfied-theme.stories';

export const SentimentVeryDissatisfied = (args: IconsSentimentVeryDissatisfiedProps) => (
  <Icon {...args}></Icon>
);

SentimentVeryDissatisfied.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SentimentVeryDissatisfied.argTypes = {
  display,
  appearance,
  size,
  theme,
};
