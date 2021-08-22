import React from 'react';
import { string, oneOf, bool, func } from 'prop-types';
import styles from './Input.module.css';
import searchIcon from '../../assets/icons/search.svg';

const Input = ({
  type,
  name,
  controller,
  placeholder,
  label,
  showLabel,
  icon,
  prefixText,
  error,
  errorMsg,
  onChangeParam,
  onFocusParam,
}) => {
  const { ref, onChange, onBlur } = controller(name);

  const handleChange = (e) => {
    onChange(e);
    onChangeParam?.(e);
  };

  return (
    <div className={styles.input__main_wrapper}>
      {label && showLabel && (
        <div className={styles.input_label__wrapper}>
          <label htmlFor={name}>{label}</label>
        </div>
      )}
      <div className={styles.input__wrapper}>
        {prefixText && (
          <span className={styles.input__prefix_text}>{prefixText}</span>
        )}
        <input
          className={`${styles.input} ${error ? styles.input_error : ''} ${
            icon ? styles.input_icon : ''
          }`}
          type={type}
          id={name}
          name={name}
          ref={ref}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={onBlur}
          onFocus={onFocusParam}
        />
        {icon && (
          <img
            src={searchIcon}
            alt="input-icon"
            className={styles.input_icon_image}
          />
        )}
        <div
          className={`${styles.input__error_msg_wrapper} ${
            prefixText ? styles.input__with_prefix_text : ''
          }`}
        >
          {error && <p className={styles.input__error_msg}>{errorMsg}</p>}
        </div>
      </div>
    </div>
  );
};

Input.propTypes = {
  type: oneOf(['text', 'number']),
  name: string.isRequired,
  controller: func.isRequired,
  placeholder: string,
  label: string.isRequired,
  showLabel: bool,
  icon: oneOf(['search']),
  prefixText: string,
  error: bool,
  errorMsg: string,
  onChangeParam: func,
  onFocusParam: func,
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  showLabel: true,
  icon: null,
  prefixText: null,
  error: false,
  errorMsg: null,
  onChangeParam: null,
  onFocusParam: null,
};

export default Input;
