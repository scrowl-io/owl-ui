import { CSSModClass } from './types';
import { hasProp } from '../../../scripts/utls/objects';

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

  return localProps.className;
};

export default {
  hasProp,
  getCssModClass,
};
