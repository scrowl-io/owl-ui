import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFilterHdrProps } from './FilterHdr.types';

export const Component = (props: IconsFilterHdrProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>filter_hdr</Default>;
};

export default {
  Component,
};
