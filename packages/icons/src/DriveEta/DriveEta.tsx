import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsDriveEtaProps } from './DriveEta.types';

export const Component = (props: IconsDriveEtaProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>drive_eta</Default>;
};

export default {
  Component,
};
