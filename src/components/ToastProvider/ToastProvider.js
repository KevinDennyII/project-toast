import React from 'react';
import useKeyDown from '../../hooks/use-key-down';
export const ToastContext = React.createContext();
function ToastProvider({children}) {
  const [toasts, setToasts] = React.useState([
    {id: crypto.randomUUID(), message:"Whoa!", option:"success"}
  ]);

  function createToast(message, option) {
    const nextToasts = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        option,
      },
    ];

    setToasts(nextToasts);
  }

  function removeToast(id){
    const updateToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });

    setToasts(updateToasts);
  }

  const removeAllToast = React.useCallback(() => {
    setToasts([]);
  }, []);

  useKeyDown('Escape', removeAllToast);

  return (
    <ToastContext.Provider value={{ toasts, createToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
