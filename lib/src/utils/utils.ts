import * as globalMod from '@owlui/theme/src/_index.scss';
import { localProp, localStyles, localInnerProps, stringMap } from './types';

export const hasProp = (obj: object, prop: string) => {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};

export const cleanCopy = (obj: object | localProp) => {
  return Object.assign({}, obj);
};

export const findModClass = (
  styles: stringMap,
  baseClass?: string | undefined
) => {
  return (classLookup: string): string => {
    const modName = baseClass ? `${baseClass}${classLookup}` : `${classLookup}`;

    return hasProp(styles, modName) ? styles[modName] : '';
  };
};

const toCamelCase = (str: string) => {
  const replacedStr = str.replace(/[-_]+(.)?/g, (_, letter) => {
    return letter ? letter.toUpperCase() : '';
  });

  return replacedStr.substring(0, 1).toLowerCase() + replacedStr.substring(1);
};

const moduleToCamelCase = (ogMod: stringMap) => {
  const casedMod: stringMap = {};

  for (const prop in ogMod) {
    if (prop.indexOf('owlui') !== -1) {
      casedMod[toCamelCase(prop.replace('owlui', ''))] = `${ogMod[prop]}`;
    } else {
      casedMod[toCamelCase(prop)] = ogMod[prop];
    }
  }

  return casedMod;
};

export const createLocalProps = (
  props: object,
  styles: localStyles,
  removables: string[]
): object => {
  const styleMod = moduleToCamelCase(styles.module);
  const styleGlobal = moduleToCamelCase(globalMod);
  const getComponentClasses = findModClass(styleMod, styles.classes.base);
  const getGlobalClasses = findModClass(styleGlobal);
  const localClassName = [styleMod[styles.classes.base]];
  const localProps: localInnerProps = { ...props };
  const bsProps = styles.classes.bsProps;
  const bsPropClassesPrefix = 'owlui';
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

  if (bsProps) {
    bsProps.forEach(bsProp => {
      const bsPropKey = props[bsProp as keyof typeof props];

      if (bsPropKey) {
        localClassName.push(
          classPrefix
            ? `${classPrefix}-${bsPropClassesPrefix}-${bsProp}-${bsPropKey}`
            : `${bsPropClassesPrefix}-${bsProp}-${bsPropKey}`
        );
      }
    });
  }

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
  findModClass,
  createLocalProps,
};
