import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSpaProps } from './Spa.types';

export const Component = (props: IconsSpaProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>spa</Default>;
};

export default {
  Component,
};
