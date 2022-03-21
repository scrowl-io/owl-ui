import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSmsFailedProps } from './SmsFailed.types';

export const Component = (props: IconsSmsFailedProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>sms_failed</Default>;
};

export default {
  Component,
};
