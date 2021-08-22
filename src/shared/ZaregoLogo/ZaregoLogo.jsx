import React from 'react';
import { func } from 'prop-types';
import logo from '../../assets/images/logo.png';
import styles from './ZaregoLogo.module.css';

const ZaregoLogo = ({ handleClick }) => (
  <div>
    <img
      className={`${styles.zarego_logo}${
        !handleClick ? styles.default_logo : ''
      }`}
      src={logo}
      alt="Zarego"
      onClick={handleClick}
    />
  </div>
);

ZaregoLogo.propTypes = {
  handleClick: func,
};

ZaregoLogo.defaultProps = {
  handleClick: null,
};

export default React.memo(ZaregoLogo);
