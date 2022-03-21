import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLibraryBooksProps } from './LibraryBooks.types';

export const Component = (props: IconsLibraryBooksProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>library_books</Default>;
};

export default {
  Component,
};
