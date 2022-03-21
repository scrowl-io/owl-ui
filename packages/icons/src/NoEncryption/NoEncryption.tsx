import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsNoEncryptionProps } from './NoEncryption.types';

export const Component = (props: IconsNoEncryptionProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>no_encryption</Default>;
};

export default {
  Component,
};
