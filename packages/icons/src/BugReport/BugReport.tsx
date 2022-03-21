import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsBugReportProps } from './BugReport.types';

export const Component = (props: IconsBugReportProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>bug_report</Default>;
};

export default {
  Component,
};
