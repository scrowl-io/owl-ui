import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsMoneyOffProps } from './MoneyOff.types';

export const Component = (props: IconsMoneyOffProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>money_off</Default>;
};

export default {
  Component,
};
