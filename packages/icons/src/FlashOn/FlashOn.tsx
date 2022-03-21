import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFlashOnProps } from './FlashOn.types';

export const Component = (props: IconsFlashOnProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>flash_on</Default>;
};

export default {
  Component,
};
