import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAllInclusiveProps } from './AllInclusive.types';

export const Component = (props: IconsAllInclusiveProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>all_inclusive</Default>;
};

export default {
  Component,
};
