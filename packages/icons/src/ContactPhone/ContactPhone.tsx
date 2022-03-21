import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsContactPhoneProps } from './ContactPhone.types';

export const Component = (props: IconsContactPhoneProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>contact_phone</Default>;
};

export default {
  Component,
};
