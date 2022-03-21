import * as React from 'react';
import { component as Icon } from '../index';
import { IconsRateReviewProps } from '../RateReview.types';

import { display } from './RateReview-display.stories';
import { appearance } from './RateReview-appearance.stories';
import { size } from './RateReview-size.stories';
import { theme } from './RateReview-theme.stories';

export const RateReview = (args: IconsRateReviewProps) => (
  <Icon {...args}></Icon>
);

RateReview.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

RateReview.argTypes = {
  display,
  appearance,
  size,
  theme,
};
