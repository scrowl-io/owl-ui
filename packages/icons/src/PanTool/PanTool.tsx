import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPanToolProps } from './PanTool.types';

export const Component = (props: IconsPanToolProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>pan_tool</Default>;
};

export default {
  Component,
};
