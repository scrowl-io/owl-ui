import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPhoneLockedProps } from './PhoneLocked.types';

export const Component = (props: IconsPhoneLockedProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>phone_locked</Default>;
};

export default {
  Component,
};
