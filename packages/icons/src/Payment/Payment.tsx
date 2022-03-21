import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPaymentProps } from './Payment.types';

export const Component = (props: IconsPaymentProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>payment</Default>;
};

export default {
  Component,
};
