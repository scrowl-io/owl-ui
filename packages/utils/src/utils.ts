import { CSSModClass, stylesProp, localProp } from './types';

export const hasProp = (obj: object, prop: string) => {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};

export const cleanCopy = (obj: object | localProp) => {
  return Object.assign({}, obj);
};

/**
 * Method used to create classes for sub components based on the CSS Module object
 */
export const getCssModClass = ({
  localProps,
  styles,
  baseClass,
}: CSSModClass): string => {
  localProps.className = hasProp(localProps, 'className')
    ? `${styles[baseClass]} ${localProps.className}`
    : styles[baseClass];

  return localProps.className || '';
};

export const findModClass = (styles: stylesProp, baseClass: string) => {
  return (classLookup: string): string => {
    const modName = `${baseClass}${classLookup}`;

    return hasProp(styles, modName) ? styles[modName] : '';
  };
};

export default {
  hasProp,
  cleanCopy,
  getCssModClass,
  findModClass,
};
