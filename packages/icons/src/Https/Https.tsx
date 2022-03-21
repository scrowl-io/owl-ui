import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsHttpsProps } from './Https.types';

export const Component = (props: IconsHttpsProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>https</Default>;
};

export default {
  Component,
};
