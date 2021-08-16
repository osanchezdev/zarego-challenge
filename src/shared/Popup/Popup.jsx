import React from 'react';
import { oneOfType, node, arrayOf, bool, func } from 'prop-types';
import styles from './Popup.module.css';

const Popup = ({ children, show, handleClose }) => (
  <div
    role="dialog"
    className={`${styles.popup__overlay} ${
      show ? styles.popup__overlay_show : ''
    }`}
    onClick={handleClose}
  >
    <div
      aria-hidden
      className={styles.popup__wrapper}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  </div>
);

Popup.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
  show: bool,
  handleClose: func.isRequired,
};

Popup.defaultProps = {
  show: false,
};

export default Popup;
