import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsExitToAppProps } from './ExitToApp.types';

export const Component = (props: IconsExitToAppProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>exit_to_app</Default>;
};

export default {
  Component,
};
