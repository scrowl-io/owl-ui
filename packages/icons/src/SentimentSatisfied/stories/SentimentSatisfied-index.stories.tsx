import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSentimentSatisfiedProps } from '../SentimentSatisfied.types';

import { display } from './SentimentSatisfied-display.stories';
import { appearance } from './SentimentSatisfied-appearance.stories';
import { size } from './SentimentSatisfied-size.stories';
import { theme } from './SentimentSatisfied-theme.stories';

export const SentimentSatisfied = (args: IconsSentimentSatisfiedProps) => (
  <Icon {...args}></Icon>
);

SentimentSatisfied.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SentimentSatisfied.argTypes = {
  display,
  appearance,
  size,
  theme,
};
