import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsReportProblemProps } from './ReportProblem.types';

export const Component = (props: IconsReportProblemProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>report_problem</Default>;
};

export default {
  Component,
};
