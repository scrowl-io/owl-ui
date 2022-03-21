import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLocalLaundryServiceProps } from './LocalLaundryService.types';

export const Component = (props: IconsLocalLaundryServiceProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>local_laundry_service</Default>;
};

export default {
  Component,
};
