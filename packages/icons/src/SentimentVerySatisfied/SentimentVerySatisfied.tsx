import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSentimentVerySatisfiedProps } from './SentimentVerySatisfied.types';

export const Component = (props: IconsSentimentVerySatisfiedProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>sentiment_very_satisfied</Default>;
};

export default {
  Component,
};
