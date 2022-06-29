import { DefaultOptions } from 'constants/app.constant';
import { toast, ToastOptions } from 'react-toastify';

export function displayToastify(message: string, type = 'success') {
  switch (type) {
    case 'success':
      toast.success(message, DefaultOptions as ToastOptions);
      break;
    case 'failed':
      toast.error(message, DefaultOptions as ToastOptions);
      break;
    case 'warning':
      toast.warning(message, DefaultOptions as ToastOptions);
      break;
    default:
      toast(message, DefaultOptions as ToastOptions);
      break;
  }
}
