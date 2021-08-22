import React from 'react';
import { bool, func, string } from 'prop-types';
import styles from './Checkbox.module.css';

const Checkbox = ({ name, label, showLabel, controller }) => (
  <div className={styles.checkbox__wrapper}>
    <div className={styles.checkbox_input__wrapper}>
      <input
        id={name}
        type="checkbox"
        name={name}
        className={styles.checkbox_input}
        {...controller(name)}
      />
    </div>
    {label && showLabel && (
      <div className={styles.checkbox_label__wrapper}>
        <label htmlFor={name} className={styles.checkbox_label}>
          {label}
        </label>
      </div>
    )}
  </div>
);
Checkbox.propTypes = {
  label: string.isRequired,
  name: string.isRequired,
  showLabel: bool,
  controller: func.isRequired,
};

Checkbox.defaultProps = { showLabel: true };

export default Checkbox;
