import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsIsoProps } from './Iso.types';

export const Component = (props: IconsIsoProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>iso</Default>;
};

export default {
  Component,
};
