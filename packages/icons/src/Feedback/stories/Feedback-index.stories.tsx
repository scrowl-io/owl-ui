import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFeedbackProps } from '../Feedback.types';

import { display } from './Feedback-display.stories';
import { appearance } from './Feedback-appearance.stories';
import { size } from './Feedback-size.stories';
import { theme } from './Feedback-theme.stories';

export const Feedback = (args: IconsFeedbackProps) => (
  <Icon {...args}></Icon>
);

Feedback.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Feedback.argTypes = {
  display,
  appearance,
  size,
  theme,
};
