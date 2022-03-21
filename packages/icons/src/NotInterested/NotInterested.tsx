import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsNotInterestedProps } from './NotInterested.types';

export const Component = (props: IconsNotInterestedProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>not_interested</Default>;
};

export default {
  Component,
};
