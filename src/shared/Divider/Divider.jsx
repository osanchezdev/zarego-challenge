import React from 'react';
import { string } from 'prop-types';
import styles from './Divider.module.css';

const Divider = ({ text }) => (
  <div className={styles.divider__wrapper}>
    {text && (
      <div className={styles.divider_text__wrapper}>
        <span className={styles.divider_text}>{text}</span>
      </div>
    )}
    <div role="separator" className={styles.divider} />
  </div>
);

Divider.propTypes = {
  text: string,
};

Divider.defaultProps = {
  text: null,
};

export default Divider;
