import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLocalHospitalProps } from './LocalHospital.types';

export const Component = (props: IconsLocalHospitalProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>local_hospital</Default>;
};

export default {
  Component,
};
