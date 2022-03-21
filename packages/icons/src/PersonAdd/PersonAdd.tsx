import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPersonAddProps } from './PersonAdd.types';

export const Component = (props: IconsPersonAddProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>person_add</Default>;
};

export default {
  Component,
};
