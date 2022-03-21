import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsEjectProps } from './Eject.types';

export const Component = (props: IconsEjectProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>eject</Default>;
};

export default {
  Component,
};
