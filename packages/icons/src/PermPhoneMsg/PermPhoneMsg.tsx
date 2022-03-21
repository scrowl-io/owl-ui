import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPermPhoneMsgProps } from './PermPhoneMsg.types';

export const Component = (props: IconsPermPhoneMsgProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>perm_phone_msg</Default>;
};

export default {
  Component,
};
