import { CSSModClass } from './types';

/**
 * Method used to create classes for sub components based on the CSS Module object
 */
export const getCssModClass = ({
  localProps,
  styles,
  baseClass,
}: CSSModClass): string => {
  localProps.className = Object.prototype.hasOwnProperty.call(
    localProps,
    'className'
  )
    ? `${styles[baseClass]} ${localProps.className}`
    : styles[baseClass];

  return localProps.className;
};

export default {
  getCssModClass,
};
