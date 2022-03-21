import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsHdrWeakProps } from './HdrWeak.types';

export const Component = (props: IconsHdrWeakProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>hdr_weak</Default>;
};

export default {
  Component,
};
