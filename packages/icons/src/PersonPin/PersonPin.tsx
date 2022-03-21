import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPersonPinProps } from './PersonPin.types';

export const Component = (props: IconsPersonPinProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>person_pin</Default>;
};

export default {
  Component,
};
