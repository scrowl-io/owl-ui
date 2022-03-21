import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAutorenewProps } from './Autorenew.types';

export const Component = (props: IconsAutorenewProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>autorenew</Default>;
};

export default {
  Component,
};
