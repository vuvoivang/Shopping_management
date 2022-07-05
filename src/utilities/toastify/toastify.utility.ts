import { DefaultOptions } from 'constants/app.constant';
import { toast, ToastOptions } from 'react-toastify';

export function displayToastify(message: string, type = 'success', options = {}) {
  const newOptions = { ...DefaultOptions, ...options };
  switch (type) {
    case 'success':
      toast.success(message, newOptions as ToastOptions);
      break;
    case 'failed':
      toast.error(message, newOptions as ToastOptions);
      break;
    case 'warning':
      toast.warning(message, newOptions as ToastOptions);
      break;
    default:
      toast(message, newOptions as ToastOptions);
      break;
  }
}
