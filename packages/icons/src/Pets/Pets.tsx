import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPetsProps } from './Pets.types';

export const Component = (props: IconsPetsProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>pets</Default>;
};

export default {
  Component,
};
