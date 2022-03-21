import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFeedbackProps } from './Feedback.types';

export const Component = (props: IconsFeedbackProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>feedback</Default>;
};

export default {
  Component,
};
