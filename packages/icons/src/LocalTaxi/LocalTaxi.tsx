import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLocalTaxiProps } from './LocalTaxi.types';

export const Component = (props: IconsLocalTaxiProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>local_taxi</Default>;
};

export default {
  Component,
};
