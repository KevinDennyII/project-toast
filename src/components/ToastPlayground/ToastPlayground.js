import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import ToastShelf from "../ToastShelf";
import {ToastContext} from "../ToastProvider";

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('')
  const [option, setSelectedOption] = React.useState('notice');
  const { createToast } = React.useContext(ToastContext);

  function handleChange(event){
    setMessage(event.target.value);
  }

  function handleSelectedOption(event){
    setSelectedOption(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
    createToast(message, option);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <form onSubmit={handleSubmit}>
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
            { VARIANT_OPTIONS.map((variant) => (
                <label key={`${variant}-${Math.random()}`} htmlFor={`variant-${variant}`}>
                <input
                  id={`variant-${variant}`}
                  key={`${variant}-${Math.random()/2}`}
                  type="radio"
                  name="variant"
                  value={`${variant}`}
                  checked={variant === option}
                  onChange={handleSelectedOption}
                />
                  {variant}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button type="submit">Pop Toast!</Button>
          </div>
        </div>
      </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
