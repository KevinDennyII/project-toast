import React from 'react';

import Button from '../Button';
import Toast from '../Toast';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('')
  const [toastOption, setSelectedToastOption] = React.useState('notice');

  function handleChange(event){
    setMessage(event.target.value);
    console.log(message)
  }

  function handleSelectedOption(event){
    setSelectedToastOption(event.target.value);
    console.log(toastOption);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <Toast message={message} option={toastOption} />

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" value={message} onChange={handleChange} className={styles.messageInput} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            { VARIANT_OPTIONS.map((option) => (
                <label key={`${option}-${Math.random()}`} htmlFor={`variant-${option}`}>
                <input
                  id={`variant-${option}`}
                  key={`${option}-${Math.random()/2}`}
                  type="radio"
                  name="variant"
                  value={`${option}`}
                  checked={toastOption === option}
                  onChange={handleSelectedOption}
                />
                  {option}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
