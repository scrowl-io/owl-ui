import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsHdrOffProps } from './HdrOff.types';

export const Component = (props: IconsHdrOffProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>hdr_off</Default>;
};

export default {
  Component,
};
