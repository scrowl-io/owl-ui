import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsHdrStrongProps } from './HdrStrong.types';

export const Component = (props: IconsHdrStrongProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>hdr_strong</Default>;
};

export default {
  Component,
};
