import React from 'react';
import ReactDOM from 'react-dom';
import { oneOfType, node, arrayOf, bool, func } from 'prop-types';
import styles from './Popup.module.css';

const Popup = ({ children, show, handleClose }) =>
  ReactDOM.createPortal(
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
    </div>,
    document.body
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
