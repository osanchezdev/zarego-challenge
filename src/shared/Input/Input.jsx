import React from 'react';
import { string, oneOf, bool, func } from 'prop-types';
import styles from './Input.module.css';

const Input = React.forwardRef(
  (
    {
      type,
      placeholder,
      label,
      showLabel,
      prefixText,
      error,
      errorMsg,
      onChange,
      onBlur,
    },
    ref
  ) => (
    <div className={styles.input__main_wrapper}>
      {showLabel && (
        <div className={styles.input_label__wrapper}>
          <label htmlFor={label}>{label}</label>
        </div>
      )}
      <div className={styles.input__wrapper}>
        {prefixText && (
          <span className={styles.input__prefix_text}>{prefixText}</span>
        )}
        <input
          ref={ref}
          className={`${styles.input} ${error ? styles.input_error : ''}`}
          type={type}
          id={label}
          name={label}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
        />
        <div className={styles.input__error_msg_wrapper}>
          {error && <p className={styles.input__error_msg}>{errorMsg}</p>}
        </div>
      </div>
    </div>
  )
);

Input.propTypes = {
  type: oneOf(['text', 'number']),
  placeholder: string,
  label: string.isRequired,
  showLabel: bool,
  prefixText: string,
  error: bool,
  errorMsg: string,
  onChange: func,
  onBlur: func,
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  showLabel: true,
  prefixText: null,
  error: false,
  errorMsg: null,
  onChange: null,
  onBlur: null,
};

export default Input;
