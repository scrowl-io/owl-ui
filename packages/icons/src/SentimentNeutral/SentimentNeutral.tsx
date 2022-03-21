import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSentimentNeutralProps } from './SentimentNeutral.types';

export const Component = (props: IconsSentimentNeutralProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>sentiment_neutral</Default>;
};

export default {
  Component,
};
