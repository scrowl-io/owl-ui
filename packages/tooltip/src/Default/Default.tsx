import React from 'react';
import {
  ThemeProvider,
  Popover,
  OverlayTrigger,
  Tooltip as BsTooltip,
} from 'react-bootstrap';
import { TooltipDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import {
  createLocalProps,
  themePrefixesProps,
} from '../../../../lib/src/utils';

export const Tooltip = (props: TooltipDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'tooltip';
  const { tooltipContent, tooltipTrigger } = props;
  const prefix = props.prefix || '';

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
            fields: ['pxScale'],
            value: 'PxScale',
          },
        ],
      },
    },
    ['prefix', 'theme', 'pxScale', 'tooltipContent']
  );

  themePrefixes[baseClass] = `owlui-${baseClass}`;
  themePrefixes['popover'] = 'owlui-popover';
  themePrefixes['popover-header'] = 'owlui-popover-header';
  themePrefixes['popover-body'] = 'owlui-popover-body';

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <OverlayTrigger
        {...locals}
        overlay={
          tooltipContent.header ? (
            <Popover {...locals}>
              <Popover.Header>{tooltipContent.header}</Popover.Header>
              <Popover.Body>{tooltipContent.content}</Popover.Body>
            </Popover>
          ) : (
            <BsTooltip {...locals}>{tooltipContent.content}</BsTooltip>
          )
        }
      >
        {tooltipTrigger}
      </OverlayTrigger>
    </ThemeProvider>
  );
};

export default {
  Tooltip,
};
