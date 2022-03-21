import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLocalAtmProps } from './LocalAtm.types';

export const Component = (props: IconsLocalAtmProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>local_atm</Default>;
};

export default {
  Component,
};
