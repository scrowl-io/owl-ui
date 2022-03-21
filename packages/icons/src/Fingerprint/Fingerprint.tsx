import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFingerprintProps } from './Fingerprint.types';

export const Component = (props: IconsFingerprintProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>fingerprint</Default>;
};

export default {
  Component,
};
