import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsTagFacesProps } from './TagFaces.types';

export const Component = (props: IconsTagFacesProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>tag_faces</Default>;
};

export default {
  Component,
};
