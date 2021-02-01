import React, { useState, useRef } from 'react';
import { Button } from 'antd';
import FormContainer from './FormContainer';

const fields = [
  {
    name: 'username',
    label: '用户名',
    type: 'input',
    required: true,
    validator: (rules: any, value: string, callback:Function, form: any) => {
      debugger;
      callback('fasdffdadsfdasadf');
    }
  },
  {
    name: 'password',
    label: '密码',
    type: 'input'
  }
];

const formData = {
  username: 'xiaohua',
  password: '23242134',
  password1: '2324213fsadfas4',
};

const FormComp = () => {
  const formRef = useRef<any>();
  const getFormVal = () => {
    const form = formRef.current;
    debugger;
    form
      .validateFields()
      .then((values: any) => {
        debugger;
      })
      .catch((info: string) => {
        debugger;
      });
  }

  const resetFormVal = () => {
    const form = formRef.current;
    form.resetFields();
  }

  let formConfig = {
    fields,
    formData
  }
  return (
    <div>
      <FormContainer {...formConfig} ref={formRef} />
      <Button onClick={getFormVal}>获取表单值</Button>
      <Button onClick={resetFormVal}>重置表单值</Button>
    </div>
  );
}

export default FormComp;
