import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsNotificationsPausedProps } from './NotificationsPaused.types';

export const Component = (props: IconsNotificationsPausedProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>notifications_paused</Default>;
};

export default {
  Component,
};
