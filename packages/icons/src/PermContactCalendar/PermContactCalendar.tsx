import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPermContactCalendarProps } from './PermContactCalendar.types';

export const Component = (props: IconsPermContactCalendarProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>perm_contact_calendar</Default>;
};

export default {
  Component,
};
