import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsNotificationsNoneProps } from './NotificationsNone.types';

export const Component = (props: IconsNotificationsNoneProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>notifications_none</Default>;
};

export default {
  Component,
};
