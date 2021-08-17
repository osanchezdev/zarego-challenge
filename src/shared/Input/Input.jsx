import React from 'react';
import { string, oneOf, bool, func } from 'prop-types';
import styles from './Input.module.css';
import searchIcon from '../../assets/icons/search.svg';

const Input = React.forwardRef(
  (
    {
      type,
      placeholder,
      label,
      showLabel,
      icon,
      prefixText,
      error,
      errorMsg,
      onChange,
      onBlur,
      onFocus,
    },
    ref
  ) => {
    const getIcon = () => {
      switch (icon) {
        case 'search':
        default:
          return searchIcon;
      }
    };
    return (
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
            className={`${styles.input} ${error ? styles.input_error : ''} ${
              icon ? styles.input_icon : ''
            }`}
            type={type}
            id={label}
            name={label}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
          />
          {icon && (
            <img
              src={getIcon()}
              alt="input-icon"
              className={styles.input_icon_image}
            />
          )}
          <div className={styles.input__error_msg_wrapper}>
            {error && <p className={styles.input__error_msg}>{errorMsg}</p>}
          </div>
        </div>
      </div>
    );
  }
);

Input.propTypes = {
  type: oneOf(['text', 'number']),
  placeholder: string,
  label: string.isRequired,
  showLabel: bool,
  icon: oneOf(['search']),
  prefixText: string,
  error: bool,
  errorMsg: string,
  onChange: func,
  onBlur: func,
  onFocus: func,
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  showLabel: true,
  icon: null,
  prefixText: null,
  error: false,
  errorMsg: null,
  onChange: null,
  onBlur: null,
  onFocus: null,
};

export default Input;
