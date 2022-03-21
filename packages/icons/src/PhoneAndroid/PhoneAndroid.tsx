import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPhoneAndroidProps } from './PhoneAndroid.types';

export const Component = (props: IconsPhoneAndroidProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>phone_android</Default>;
};

export default {
  Component,
};
