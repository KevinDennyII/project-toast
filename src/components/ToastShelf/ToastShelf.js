import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({toasts, removeToast}) {
  console.log(toasts);

  return (
    <ol className={styles.wrapper}>
      {toasts.map(toast => (
      <li key={toast.id} className={styles.toastWrapper}>
        <Toast toast={toast} removeToast={removeToast} />
      </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
