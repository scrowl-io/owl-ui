import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsImportExportProps } from './ImportExport.types';

export const Component = (props: IconsImportExportProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>import_export</Default>;
};

export default {
  Component,
};
