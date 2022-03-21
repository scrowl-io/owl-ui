import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSupervisorAccountProps } from './SupervisorAccount.types';

export const Component = (props: IconsSupervisorAccountProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>supervisor_account</Default>;
};

export default {
  Component,
};
