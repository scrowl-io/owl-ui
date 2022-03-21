import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsNfcProps } from './Nfc.types';

export const Component = (props: IconsNfcProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>nfc</Default>;
};

export default {
  Component,
};
