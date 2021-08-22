import React from 'react';
import { bool, string, arrayOf, func } from 'prop-types';
import styles from './DropdownSelect.module.css';

const DropdownSelect = ({
  label,
  name,
  controller,
  showLabel,
  error,
  errorMsg,
  data,
}) => (
  <div className={styles.dropdown_select__wrapper}>
    {label && showLabel && (
      <div className={styles.select_label__wrapper}>
        <label htmlFor={name} className={styles.select_label}>
          {label}
        </label>
      </div>
    )}
    <div className={styles.select__wrapper}>
      <select
        id={name}
        defaultValue="null"
        name={name}
        className={`${styles.select} ${error ? styles.select_error : ''}`}
        {...controller(name)}
      >
        {data && data.length ? (
          <>
            <option disabled value="null">
              Select
            </option>
            {data.map((item) => (
              <option key={item} className={styles.select_option} value={item}>
                {item}
              </option>
            ))}
          </>
        ) : (
          <option value="null" readOnly className={styles.select_option_empty}>
            No options
          </option>
        )}
      </select>
    </div>
    {error && <p className={styles.select_error_msg}>{errorMsg}</p>}
  </div>
);

DropdownSelect.propTypes = {
  label: string.isRequired,
  name: string.isRequired,
  controller: func.isRequired,
  showLabel: bool,
  error: bool,
  errorMsg: string,
  data: arrayOf(string).isRequired,
};

DropdownSelect.defaultProps = {
  showLabel: true,
  error: false,
  errorMsg: null,
};

export default DropdownSelect;
