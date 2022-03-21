import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPhonelinkLockProps } from './PhonelinkLock.types';

export const Component = (props: IconsPhonelinkLockProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>phonelink_lock</Default>;
};

export default {
  Component,
};
