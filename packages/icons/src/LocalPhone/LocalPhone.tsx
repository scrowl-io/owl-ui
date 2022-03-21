import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLocalPhoneProps } from './LocalPhone.types';

export const Component = (props: IconsLocalPhoneProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>local_phone</Default>;
};

export default {
  Component,
};
