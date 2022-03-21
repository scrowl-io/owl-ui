import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsDvrProps } from './Dvr.types';

export const Component = (props: IconsDvrProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>dvr</Default>;
};

export default {
  Component,
};
