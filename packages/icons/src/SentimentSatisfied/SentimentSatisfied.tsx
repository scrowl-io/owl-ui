import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSentimentSatisfiedProps } from './SentimentSatisfied.types';

export const Component = (props: IconsSentimentSatisfiedProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>sentiment_satisfied</Default>;
};

export default {
  Component,
};
