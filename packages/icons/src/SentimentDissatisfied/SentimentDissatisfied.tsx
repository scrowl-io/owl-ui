import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSentimentDissatisfiedProps } from './SentimentDissatisfied.types';

export const Component = (props: IconsSentimentDissatisfiedProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>sentiment_dissatisfied</Default>;
};

export default {
  Component,
};
