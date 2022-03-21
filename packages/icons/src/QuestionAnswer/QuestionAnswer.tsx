import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsQuestionAnswerProps } from './QuestionAnswer.types';

export const Component = (props: IconsQuestionAnswerProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>question_answer</Default>;
};

export default {
  Component,
};
