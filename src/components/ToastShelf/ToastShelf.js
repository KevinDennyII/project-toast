import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import {ToastContext} from "../ToastProvider";

function ToastShelf() {
  const { toasts, removeToast } = React.useContext(ToastContext);

  return (
    <ol className={styles.wrapper} role={"region"} aria-live={"polite"} aria-label={"Notification"}>
      {toasts.map(toast => (
      <li key={toast.id} className={styles.toastWrapper}>
        <Toast toast={toast} removeToast={removeToast} />
      </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
