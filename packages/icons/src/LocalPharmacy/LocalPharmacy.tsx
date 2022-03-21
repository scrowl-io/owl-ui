import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLocalPharmacyProps } from './LocalPharmacy.types';

export const Component = (props: IconsLocalPharmacyProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>local_pharmacy</Default>;
};

export default {
  Component,
};
