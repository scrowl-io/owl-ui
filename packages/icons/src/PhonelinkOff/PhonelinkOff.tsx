import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPhonelinkOffProps } from './PhonelinkOff.types';

export const Component = (props: IconsPhonelinkOffProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>phonelink_off</Default>;
};

export default {
  Component,
};
