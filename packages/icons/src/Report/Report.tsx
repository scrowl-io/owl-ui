import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsReportProps } from './Report.types';

export const Component = (props: IconsReportProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>report</Default>;
};

export default {
  Component,
};
