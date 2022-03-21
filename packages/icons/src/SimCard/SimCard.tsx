import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSimCardProps } from './SimCard.types';

export const Component = (props: IconsSimCardProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>sim_card</Default>;
};

export default {
  Component,
};
