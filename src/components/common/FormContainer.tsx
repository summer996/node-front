import React from 'react';
import { Form } from 'antd';
import { FormProps } from 'antd/lib/form';
import { FormComponentProps } from 'antd/lib/form/Form';

import { FormInput, FormDate, FormSelect } from './formComponents';

const FormComponents: any = {
  input: FormInput,
  date: FormDate,
  select: FormSelect
}

interface IField {
  filedType: string;
  label?: string;
  value?: string;
  [key: string]: any;
}

interface FormContainerProps extends FormProps {
  fields: IField[];
  form: FormComponentProps['form'];
  formData?: any;
}

const FormContainer = (props: FormContainerProps, ref: any) => {
  return 
}

export defalut Form;