import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAddAlertProps } from './AddAlert.types';

export const Component = (props: IconsAddAlertProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>add_alert</Default>;
};

export default {
  Component,
};
