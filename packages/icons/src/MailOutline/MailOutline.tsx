import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsMailOutlineProps } from './MailOutline.types';

export const Component = (props: IconsMailOutlineProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>mail_outline</Default>;
};

export default {
  Component,
};
