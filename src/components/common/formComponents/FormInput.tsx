import { Input, Form } from 'antd';
import { FormProps } from 'antd/lib/form/Form';

const FormItem = Form.Item;

export interface FormBaseProps {
  //字段value
  name: string;
  //字段名字
  label?: string;
  initialValue?: any;
  /** 是否只读 */
  readOnly?: boolean;
  /** 是否不可编辑 */
  disabled?: boolean;
  /** 是否显示删除按钮 */
  allowClear?: boolean;
  /** 是否必填 */
  required?: boolean;
  /** 占位提示字符串 */
  placeholder?: string;
  /** 自定义校验函数 */
  validator?: (rule: any, value: any, callback: any, form: any) => any;
  /** 自定义详情渲染组件 */
  render?: (value: any, form?: any) => React.ReactElement;
}
// interface FormInputProps extends FormBaseProps, FormProps {
//   //Input组件的props
//   inputProps?: any;
//   [key: string]: any
// }

const FormInput = (props: any) => {
  let {
    required,
    placeholder,
    label,
    validator,
    form,
    readOnly,
    name,
    ...restProps
  } = props;
  const { getFieldValue } = form;

  const rules: any = [
    (required && {
      required,
      message: placeholder ? placeholder : `请输入${label}`,
    }),
    {
      validator: (rules: any, value: string, callback: Function) => {
        if (value && validator) {
          validator(rules, value, callback, form);
        } else {
          callback();
        }
      },
    },
  ];

  return (
    <FormItem {...props} {...{ rules }}>
      {readOnly ? (
        restProps.render ? (
          restProps.render(getFieldValue(name))
        ) : (
          <span>{getFieldValue(name)}</span>
        )
      ) : (
        <Input />
      )}
    </FormItem>
  );
};

export default FormInput;
