import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLooks3Props } from './Looks3.types';

export const Component = (props: IconsLooks3Props) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>looks_3</Default>;
};

export default {
  Component,
};
