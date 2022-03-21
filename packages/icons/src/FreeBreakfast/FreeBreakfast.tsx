import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFreeBreakfastProps } from './FreeBreakfast.types';

export const Component = (props: IconsFreeBreakfastProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>free_breakfast</Default>;
};

export default {
  Component,
};
