import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsNotificationsOffProps } from './NotificationsOff.types';

export const Component = (props: IconsNotificationsOffProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>notifications_off</Default>;
};

export default {
  Component,
};
