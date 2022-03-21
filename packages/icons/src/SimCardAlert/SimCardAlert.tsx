import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSimCardAlertProps } from './SimCardAlert.types';

export const Component = (props: IconsSimCardAlertProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>sim_card_alert</Default>;
};

export default {
  Component,
};
