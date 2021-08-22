import React from 'react';
import { oneOf, bool, func, oneOfType, arrayOf, node } from 'prop-types';
import styles from './Button.module.css';

const Button = ({ children, disabled, type, variant, onClick }) => (
  <div className={styles.button__wrapper}>
    <button
      disabled={disabled}
      type={type}
      className={`${styles.button_default} ${
        variant === 'primary' ? styles.button_primary : styles.button_secondary
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  </div>
);

Button.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
  disabled: bool,
  type: oneOf(['button', 'submit']),
  variant: oneOf(['primary', 'secondary']),
  onClick: func,
};

Button.defaultProps = {
  disabled: false,
  type: 'button',
  variant: 'primary',
  onClick: null,
};

export default Button;
