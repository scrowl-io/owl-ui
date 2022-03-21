import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPersonProps } from './Person.types';

export const Component = (props: IconsPersonProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>person</Default>;
};

export default {
  Component,
};
