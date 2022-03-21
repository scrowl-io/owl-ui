import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAttachMoneyProps } from './AttachMoney.types';

export const Component = (props: IconsAttachMoneyProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>attach_money</Default>;
};

export default {
  Component,
};
