import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSentimentDissatisfiedProps } from '../SentimentDissatisfied.types';

import { display } from './SentimentDissatisfied-display.stories';
import { appearance } from './SentimentDissatisfied-appearance.stories';
import { size } from './SentimentDissatisfied-size.stories';
import { theme } from './SentimentDissatisfied-theme.stories';

export const SentimentDissatisfied = (args: IconsSentimentDissatisfiedProps) => (
  <Icon {...args}></Icon>
);

SentimentDissatisfied.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SentimentDissatisfied.argTypes = {
  display,
  appearance,
  size,
  theme,
};
