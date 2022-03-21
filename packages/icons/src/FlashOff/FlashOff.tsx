import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFlashOffProps } from './FlashOff.types';

export const Component = (props: IconsFlashOffProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>flash_off</Default>;
};

export default {
  Component,
};
