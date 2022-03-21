import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPhoneForwardedProps } from './PhoneForwarded.types';

export const Component = (props: IconsPhoneForwardedProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>phone_forwarded</Default>;
};

export default {
  Component,
};
