import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './App.module.css';
import Popup from '../shared/Popup/Popup';
import ZaregoLogo from '../shared/ZaregoLogo/ZaregoLogo';
import DropdownSelect from '../shared/DropdownSelect/DropdownSelect';
import { ADMISION_TYPES } from '../data';
import Input from '../shared/Input/Input';

function App() {
  const [showPopup, setShowPopup] = useState(true);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));

  register('Admision type', { required: true });
  return (
    <main className={styles.app}>
      <div className={styles.app_logo_wrapper}>
        <ZaregoLogo handleClick={() => setShowPopup(true)} />
      </div>
      <Popup show={showPopup} handleClose={() => setShowPopup(false)}>
        <h1>Popup content</h1>
        <div style={{ padding: '5rem' }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input label="inputl" {...register('inputl', { required: true })} />
            <DropdownSelect
              label="Admision type"
              data={ADMISION_TYPES}
              {...register('Admision type', { required: true })}
            />
            <input type="submit" />
          </form>
        </div>
      </Popup>
    </main>
  );
}

export default App;
