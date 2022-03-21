import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsNotificationsProps } from './Notifications.types';

export const Component = (props: IconsNotificationsProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>notifications</Default>;
};

export default {
  Component,
};
