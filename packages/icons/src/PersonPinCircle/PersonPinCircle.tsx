import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPersonPinCircleProps } from './PersonPinCircle.types';

export const Component = (props: IconsPersonPinCircleProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>person_pin_circle</Default>;
};

export default {
  Component,
};
