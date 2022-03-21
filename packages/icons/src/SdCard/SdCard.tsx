import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSdCardProps } from './SdCard.types';

export const Component = (props: IconsSdCardProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>sd_card</Default>;
};

export default {
  Component,
};
