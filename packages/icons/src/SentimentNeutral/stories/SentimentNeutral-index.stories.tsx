import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSentimentNeutralProps } from '../SentimentNeutral.types';

import { display } from './SentimentNeutral-display.stories';
import { appearance } from './SentimentNeutral-appearance.stories';
import { size } from './SentimentNeutral-size.stories';
import { theme } from './SentimentNeutral-theme.stories';

export const SentimentNeutral = (args: IconsSentimentNeutralProps) => (
  <Icon {...args}></Icon>
);

SentimentNeutral.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SentimentNeutral.argTypes = {
  display,
  appearance,
  size,
  theme,
};
