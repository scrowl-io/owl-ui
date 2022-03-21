import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsContentCutProps } from './ContentCut.types';

export const Component = (props: IconsContentCutProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>content_cut</Default>;
};

export default {
  Component,
};
