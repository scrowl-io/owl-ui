import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsEmailProps } from './Email.types';

export const Component = (props: IconsEmailProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>email</Default>;
};

export default {
  Component,
};
