import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSentimentVerySatisfiedProps } from '../SentimentVerySatisfied.types';

import { display } from './SentimentVerySatisfied-display.stories';
import { appearance } from './SentimentVerySatisfied-appearance.stories';
import { size } from './SentimentVerySatisfied-size.stories';
import { theme } from './SentimentVerySatisfied-theme.stories';

export const SentimentVerySatisfied = (args: IconsSentimentVerySatisfiedProps) => (
  <Icon {...args}></Icon>
);

SentimentVerySatisfied.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SentimentVerySatisfied.argTypes = {
  display,
  appearance,
  size,
  theme,
};
