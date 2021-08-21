import React, { useState } from 'react';
import styles from './App.module.css';
import Popup from '../shared/Popup/Popup';
import ZaregoLogo from '../shared/ZaregoLogo/ZaregoLogo';
import AidOfferForm from '../containers/AidOfferForm/AidOfferForm';

function App() {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <main className={styles.app}>
      <div className={styles.app_logo_wrapper}>
        <ZaregoLogo handleClick={() => setShowPopup(true)} />
      </div>
      <Popup show={showPopup} handleClose={() => setShowPopup(false)}>
        <AidOfferForm />
      </Popup>
    </main>
  );
}

export default App;
