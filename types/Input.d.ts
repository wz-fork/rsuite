import * as React from 'react';

export interface InputProps {
  /** The prefix of the component CSS class */
  classPrefix?: string;

  /** Additional classes */
  className?: string;

  /** You can use a custom element for this component */
  componentClass: React.ReactType<InputProps>;

  /** The HTML input type */
  type: string;

  /** The HTML input id */
  id?: string;

  /** An Input field can show that it is disabled */
  disabled?: boolean;

  /** Current value of the input. Creates a controlled component */
  value?: string;

  /** Initial value */
  defaultValue?: string;

  /** Ref of input element */
  inputRef?: React.Ref<any>;

  /** Called on change */
  onChange?: (value: any, event: React.ChangeEvent<HTMLInputElement>) => void;

  /** Called on press enter */
  onPressEnter?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

declare const Input: React.ComponentType<InputProps>;

export default Input;
