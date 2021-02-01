import React, { createElement, useEffect, useImperativeHandle, forwardRef, useRef } from 'react';
import { Form } from 'antd';
import { FormProps, FormInstance } from 'antd/lib/form';

import { FormInput, FormDate, FormSelect } from './formComponents';

import './index.css'


const FormItem = Form.Item;

const FormComponents: any = {
  input: FormInput,
  date: FormDate,
  select: FormSelect
}

interface IField {
  filedType: string;
  label?: string;
  name?: string;
  [key: string]: any;
}

interface IProps {
  fields: IField[];
  formData?: any;
  [key: string]: any;
}

const FormContainer = (props: IProps, ref: any) => {
  let { formData, fields } = props;
  const [form] = Form.useForm();

  useImperativeHandle(ref, () => ({
    ...form,
  }));

  const onSubmit = () => {};

  //表单回显
  useEffect(() => {
    form.setFieldsValue(formData);
  }, [formData]);

  const formItemLayout = {
    labelCol: {
      span: 7,
    },
    wrapperCol: {
      span: 12,
    },
  };

  const renderFormItem = (item: any) => {
    let { labelCol, wrapperCol, type } = item;
    let defaultLabelCol = { span: 7 }, defaultWrapperCol = { span: 12 };
    let props = {
      labelCol: labelCol || defaultLabelCol,
      wrapperCol: wrapperCol || defaultWrapperCol,
      form,
    };
    return FormComponents[type]({ ...item, ...props })
  }

 

  return (
    <Form form={form} className={`custom-form`}>
      {fields.map((item: any) => {
        let { type } = item;
        item.type = type || 'input';
        return renderFormItem(item);
      })}
    </Form>
  );
};

export default forwardRef(FormContainer);