import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAcUnitProps } from './AcUnit.types';

export const Component = (props: IconsAcUnitProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>ac_unit</Default>;
};

export default {
  Component,
};
