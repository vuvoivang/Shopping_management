import { toast, ToastOptions } from 'react-toastify';

export function displayToastify(message: string, type = 'success') {
  const defaultOptions = {
    position: 'top-right',
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  };
  switch (type) {
    case 'success':
      toast.success(message, defaultOptions as ToastOptions);
      break;
    case 'failed':
      toast.error(message, defaultOptions as ToastOptions);
      break;
    case 'warning':
      toast.warning(message, defaultOptions as ToastOptions);
      break;
    default:
      toast(message, defaultOptions as ToastOptions);
      break;
  }
}
