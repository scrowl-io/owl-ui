import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsNotificationsActiveProps } from './NotificationsActive.types';

export const Component = (props: IconsNotificationsActiveProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>notifications_active</Default>;
};

export default {
  Component,
};
