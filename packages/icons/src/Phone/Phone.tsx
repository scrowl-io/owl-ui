import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPhoneProps } from './Phone.types';

export const Component = (props: IconsPhoneProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>phone</Default>;
};

export default {
  Component,
};
