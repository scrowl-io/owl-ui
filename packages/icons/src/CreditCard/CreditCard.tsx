import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCreditCardProps } from './CreditCard.types';

export const Component = (props: IconsCreditCardProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>credit_card</Default>;
};

export default {
  Component,
};
