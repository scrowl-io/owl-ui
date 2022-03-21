import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsRateReviewProps } from './RateReview.types';

export const Component = (props: IconsRateReviewProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>rate_review</Default>;
};

export default {
  Component,
};
