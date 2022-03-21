import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsImportContactsProps } from './ImportContacts.types';

export const Component = (props: IconsImportContactsProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>import_contacts</Default>;
};

export default {
  Component,
};
