import {
  CSSModClass,
  stylesProp,
  localProp,
  localStyles,
  localInnerProps,
} from './types';
import * as styleMod from '@owlui/theme/src/_index.scss';

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

export const findModClass = (
  styles: stylesProp,
  baseClass?: string | undefined
) => {
  return (classLookup: string): string => {
    const modName = baseClass ? `${baseClass}${classLookup}` : `${classLookup}`;

    return hasProp(styles, modName) ? styles[modName] : '';
  };
};

export const createLocalProps = (
  props: object,
  styles: localStyles,
  removables: string[]
): object => {
  const getComponentClasses = findModClass(styles.module, styles.classes.base);
  const getGlobalClasses = findModClass(styleMod);
  const localClassName = [styles.module[styles.classes.base]];
  const localProps: localInnerProps = { ...props };
  const classPrefix = styles.classes.prefix;

  styles.classes.optionals.forEach(option => {
    let classTemp = option.value;
    let propValue = '';

    option.fields.forEach(field => {
      // as keyof type of {} is used to get the key type of an unknown property
      propValue = props[field as keyof typeof props] || '';
      classTemp += propValue;
    });

    if (classTemp) {
      let classValue = getComponentClasses(classTemp);

      if (!classValue) {
        classValue = getGlobalClasses(classTemp);
      }

      if (classValue) {
        localClassName.push(
          classPrefix ? `${classPrefix}-${classValue}` : classValue
        );
      }
    }
  });

  if (removables) removables.forEach(key => delete localProps[key]);

  const classNames: string | string[] = localProps.className
    ? localProps.className + ' ' + localClassName
    : localClassName;

  if (Array.isArray(classNames)) {
    localProps.className = classNames.join(' ');
  }

  return localProps;
};

export default {
  hasProp,
  cleanCopy,
  getCssModClass,
  findModClass,
  createLocalProps,
};
