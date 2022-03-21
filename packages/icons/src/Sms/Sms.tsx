import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSmsProps } from './Sms.types';

export const Component = (props: IconsSmsProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>sms</Default>;
};

export default {
  Component,
};
