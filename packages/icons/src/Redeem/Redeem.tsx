import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsRedeemProps } from './Redeem.types';

export const Component = (props: IconsRedeemProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>redeem</Default>;
};

export default {
  Component,
};
