import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPhonelinkProps } from './Phonelink.types';

export const Component = (props: IconsPhonelinkProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>phonelink</Default>;
};

export default {
  Component,
};
