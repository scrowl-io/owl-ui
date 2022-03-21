import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPhonelinkEraseProps } from './PhonelinkErase.types';

export const Component = (props: IconsPhonelinkEraseProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>phonelink_erase</Default>;
};

export default {
  Component,
};
