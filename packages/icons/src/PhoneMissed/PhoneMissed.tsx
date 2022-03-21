import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPhoneMissedProps } from './PhoneMissed.types';

export const Component = (props: IconsPhoneMissedProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>phone_missed</Default>;
};

export default {
  Component,
};
