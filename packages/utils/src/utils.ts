import {
  CSSModClass,
  stylesProp,
  localProp,
  createStyles,
  createLocalPropsProps,
} from './types';

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

export const createLocalProps = (
  props: object,
  styles: createStyles,
  removables: string[]
): object => {
  const getClassName = findModClass(styles.module, styles.classes.base);
  const localClassName = [styles.module[styles.classes.base]];
  const localProps: createLocalPropsProps = { ...props };
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
      const classValue = getClassName(classTemp);

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
