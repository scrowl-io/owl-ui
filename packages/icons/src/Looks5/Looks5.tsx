import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLooks5Props } from './Looks5.types';

export const Component = (props: IconsLooks5Props) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>looks_5</Default>;
};

export default {
  Component,
};
