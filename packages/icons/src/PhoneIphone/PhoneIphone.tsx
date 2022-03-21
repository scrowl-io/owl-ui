import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPhoneIphoneProps } from './PhoneIphone.types';

export const Component = (props: IconsPhoneIphoneProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>phone_iphone</Default>;
};

export default {
  Component,
};
