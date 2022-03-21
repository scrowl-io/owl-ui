import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsEnhancedEncryptionProps } from './EnhancedEncryption.types';

export const Component = (props: IconsEnhancedEncryptionProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>enhanced_encryption</Default>;
};

export default {
  Component,
};
