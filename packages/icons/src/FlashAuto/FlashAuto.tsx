import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFlashAutoProps } from './FlashAuto.types';

export const Component = (props: IconsFlashAutoProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>flash_auto</Default>;
};

export default {
  Component,
};
