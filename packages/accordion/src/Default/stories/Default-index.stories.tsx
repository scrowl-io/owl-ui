import * as React from 'react';
import { component as Accordion } from '../index';
import { AccordionDefaultProps } from '../Default.types';

import { variant } from './Default-variant.stories';
import { size } from './Default-size.stories';
import { theme } from './Default-theme.stories';

const items = [
  {
    id: '1',
    label: 'Header 1',
    view: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non diam eu enim posuere malesuada. Nullam felis nulla, tempus quis lacus sed, mollis gravida orci. Nullam turpis justo, suscipit id pretium ut, dictum at tellus. Sed facilisis dui nisl, quis blandit enim bibendum sit amet. Vestibulum id tortor a lacus suscipit vulputate. Donec et felis nisl. Proin id justo semper, venenatis nulla egestas, bibendum velit. Vivamus volutpat, mi eget bibendum cursus, velit tortor pellentesque ipsum, vitae maximus augue nunc at turpis. Cras vel nisi dolor. Duis mi risus, malesuada a magna nec, molestie varius metus. Duis eget gravida erat. Quisque hendrerit in augue at interdum. Fusce nec luctus sem, eu aliquam lorem.',
  },
  {
    id: '2',
    label: 'Header 2',
    view: 'Etiam eget sapien pretium, posuere lorem vel, ornare odio. Cras dignissim dolor id mi porttitor gravida. Ut pellentesque efficitur tristique. Praesent a lectus eu dui maximus dictum id sit amet felis. Fusce fermentum molestie eleifend. Ut suscipit ipsum sed erat mattis, eu venenatis sapien aliquet. Vestibulum quis mauris at ligula tempor bibendum id vel nunc. Mauris sed felis mauris. Nullam ante dui, finibus eu sodales a, pulvinar quis nibh. Sed lobortis diam odio, vel laoreet mauris placerat nec. Nullam quis maximus felis, et semper velit. Pellentesque mattis mauris ac tellus varius luctus.',
  },
  {
    id: '3',
    label: 'Header 2',
    view: 'Integer mollis scelerisque metus non feugiat. In vulputate sit amet orci id blandit. Suspendisse ac lacinia libero. Vivamus elementum lacus ac lectus molestie pretium. Nunc purus leo, ultricies in venenatis vel, commodo sed lacus. Donec ac felis in sem ultricies efficitur. Sed eleifend odio nec tristique dictum. In quis elit eget tellus tristique sodales et eget leo. Sed faucibus dolor eget nisi pharetra placerat. Maecenas et nisi in ante ullamcorper pellentesque. Etiam tempus venenatis purus, pellentesque lobortis justo tristique ac. Proin egestas enim eget sapien semper, ac dictum quam pulvinar. Pellentesque tellus mauris, posuere ut dui quis, consequat tincidunt mauris. Aliquam sollicitudin vestibulum arcu, id faucibus nulla feugiat in. Quisque ac orci nec tellus finibus lobortis.',
  },
];

export const Default = (args: AccordionDefaultProps) => <Accordion {...args} />;

Default.args = {
  variant: variant.defaultValue,
  size: size.defaultValue,
  theme: theme.defaultValue,
  items: items,
};

Default.argTypes = {
  variant,
  size,
  theme,
};
