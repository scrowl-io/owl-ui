import React, { useState } from 'react';
import { ThemeProvider, Form, Button, NavItem } from 'react-bootstrap';
import { FormDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps, themePrefixesProps } from '@owlui/lib/src/utils';

export const Component = (props: FormDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'form';
  const { variant, formFields } = props;
  const prefix = props.prefix || '';
  const [rangeValue, setRangeValue] = useState(10);

  const locals = createLocalProps(
    props,
    {
      module: styleMod,
      classes: {
        base: baseClass,
        prefix: prefix,
        optionals: [
          {
            fields: ['theme'],
            value: 'theme',
          },
          {
            fields: ['size'],
            value: 'Size',
          },
        ],
      },
    },
    ['prefix', 'theme', 'size', 'formFields']
  );

  themePrefixes[baseClass] = `owlui-${baseClass}`;
  themePrefixes['form-label'] = 'owlui-form-label';
  themePrefixes['form-control'] = 'owlui-form-control';
  themePrefixes['form-text'] = 'owlui-form-text';
  themePrefixes['form-check'] = 'owlui-form-check';
  themePrefixes['form-check-input'] = 'owlui-form-check-input';
  themePrefixes['form-check-label'] = 'owlui-form-check-label';
  themePrefixes['form-select'] = 'owlui-form-select';
  themePrefixes['form-range'] = 'owlui-form-range';

  const updateRange = (e: React.BaseSyntheticEvent<HTMLInputElement>) => {
    setRangeValue(e.target.value);
  };

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <Form {...locals}>
        {formFields.map(field => {
          return (
            <Form.Group
              controlId={field.controlId}
              className="mb-4"
              key={field.id}
            >
              {field.type === 'checkbox' && (
                <Form.Check type={field.type} label={field.label} />
              )}
              {field.type === 'select' && (
                <>
                  <Form.Label>{field.label}</Form.Label>
                  <Form.Select>
                    {field.fieldProps?.options.map(option => {
                      return <option key={option.id}>{option.label}</option>;
                    })}
                  </Form.Select>
                </>
              )}
              {field.type === 'range' && (
                <>
                  <Form.Label>{field.label}</Form.Label>
                  <Form.Range
                    value={rangeValue}
                    min={field.fieldProps?.min}
                    max={field.fieldProps?.max}
                    onChange={updateRange}
                  />
                  <h5>Currently selected: {rangeValue}</h5>
                </>
              )}
              {field.type != 'checkbox' &&
              field.type != 'select' &&
              field.type != 'range' ? (
                <>
                  <Form.Label>{field.label}</Form.Label>
                  <Form.Control
                    type={field.type}
                    placeholder={field.fieldProps?.placeholder}
                  />
                </>
              ) : (
                ''
              )}
            </Form.Group>
          );
        })}
        <Button variant={variant} type="submit">
          Submit
        </Button>
      </Form>
    </ThemeProvider>
  );
};

export default {
  Component,
};
