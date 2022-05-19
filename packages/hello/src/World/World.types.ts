import type { HelloDefaultProps } from '../Default/Default.types';

export type HelloWorldCommons = HelloDefaultProps & {
  
};

export type HelloWorldProps = Partial<HelloWorldCommons>;
