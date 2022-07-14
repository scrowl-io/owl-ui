import { FormDataProps } from '../Default.types';

export const emailProps = {
  type: 'input',
  label: {
    content: 'Email Address',
    htmlFor: 'email',
  },
  control: {
    id: 'email',
    type: 'email',
    disabled: false,
    readOnly: false,
    plaintext: false,
    placeholder: 'example@email.com',
  },
};

export const firstNameProps = {
  type: 'input',
  label: {
    content: 'First Name',
    htmlFor: 'first-name',
  },
  control: {
    id: 'first-name',
    type: 'text',
    placeholder: 'Sean...',
  },
};

export const rangeProps = {
  type: 'range',
  label: {
    content: 'Range',
    htmlFor: 'range',
  },
  range: {
    id: 'range',
    value: 8,
    min: 0,
    max: 10,
  },
};

export const formData: FormDataProps[] = [
  {
    type: 'input',
    inputProps: {
      label: {
        content: 'Email Address',
        htmlFor: 'email',
      },
      control: {
        id: 'email',
        type: 'email',
        disabled: false,
        readOnly: false,
        plaintext: false,
        placeholder: 'example@email.com',
      },
    },
  },
  {
    type: 'input',
    inputProps: {
      label: {
        content: 'First Name',
        htmlFor: 'first-name',
      },
      control: {
        id: 'first-name',
        type: 'text',
        placeholder: 'Sean...',
      },
    },
  },
  {
    type: 'range',
    inputProps: {
      label: {
        content: 'Range',
        htmlFor: 'range',
      },
      control: {
        id: 'range',
        value: 8,
        min: 0,
        max: 10,
      },
    },
  },
];

export default {
  emailProps,
  firstNameProps,
  rangeProps,
  formData,
};
