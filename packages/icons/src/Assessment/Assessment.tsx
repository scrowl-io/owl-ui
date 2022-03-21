import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAssessmentProps } from './Assessment.types';

export const Component = (props: IconsAssessmentProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>assessment</Default>;
};

export default {
  Component,
};
