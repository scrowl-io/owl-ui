import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsHdrOnProps } from './HdrOn.types';

export const Component = (props: IconsHdrOnProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>hdr_on</Default>;
};

export default {
  Component,
};
