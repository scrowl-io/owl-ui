import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLoyaltyProps } from './Loyalty.types';

export const Component = (props: IconsLoyaltyProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>loyalty</Default>;
};

export default {
  Component,
};
