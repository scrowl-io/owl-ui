import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSmartphoneProps } from './Smartphone.types';

export const Component = (props: IconsSmartphoneProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>smartphone</Default>;
};

export default {
  Component,
};
