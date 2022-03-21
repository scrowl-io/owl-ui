import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsHomeProps } from './Home.types';

export const Component = (props: IconsHomeProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>home</Default>;
};

export default {
  Component,
};
