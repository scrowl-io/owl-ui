import * as React from 'react';
import { component as Icon } from '../index';
import { IconsQuestionAnswerProps } from '../QuestionAnswer.types';

import { display } from './QuestionAnswer-display.stories';
import { appearance } from './QuestionAnswer-appearance.stories';
import { size } from './QuestionAnswer-size.stories';
import { theme } from './QuestionAnswer-theme.stories';

export const QuestionAnswer = (args: IconsQuestionAnswerProps) => (
  <Icon {...args}></Icon>
);

QuestionAnswer.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

QuestionAnswer.argTypes = {
  display,
  appearance,
  size,
  theme,
};
