import React from 'react';
import { bool, func, string } from 'prop-types';
import styles from './Checkbox.module.css';

const Checkbox = React.forwardRef(
  ({ label, showLabel, checked, onChange, onBlur }, ref) => (
    <div className={styles.checkbox__wrapper}>
      <div className={styles.checkbox_input__wrapper}>
        <input
          id={label}
          ref={ref}
          name={label}
          className={styles.checkbox_input}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
      {label && showLabel && (
        <div className={styles.checkbox_label__wrapper}>
          <label htmlFor={label} className={styles.checkbox_label}>
            {label}
          </label>
        </div>
      )}
    </div>
  )
);

Checkbox.propTypes = {
  label: string.isRequired,
  showLabel: bool,
  checked: bool,
  onChange: func.isRequired,
  onBlur: func.isRequired,
};

Checkbox.defaultProps = {
  checked: false,
  showLabel: true,
};

export default Checkbox;
