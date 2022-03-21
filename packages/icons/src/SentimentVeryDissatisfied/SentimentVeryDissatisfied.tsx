import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSentimentVeryDissatisfiedProps } from './SentimentVeryDissatisfied.types';

export const Component = (props: IconsSentimentVeryDissatisfiedProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>sentiment_very_dissatisfied</Default>;
};

export default {
  Component,
};
