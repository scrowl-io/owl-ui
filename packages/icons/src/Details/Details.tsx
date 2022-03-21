import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsDetailsProps } from './Details.types';

export const Component = (props: IconsDetailsProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>details</Default>;
};

export default {
  Component,
};
