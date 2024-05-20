import { Injectable} from '@angular/core';
import {ToastData, ToastOptions, ToastyService} from 'ng2-toasty';

@Injectable()
export class NotificationService {
  constructor(private toastyService: ToastyService){}
  toastOptions: ToastOptions = {
    title: '通知',
    msg: null,
    showClose: true,
    timeout: 5000,
    theme: 'bootstrap',
    onAdd: (toast: ToastData) => {
      /* added */
    },
    onRemove: (toast: ToastData) => {
      /* removed */
    }
  };

  showSuccess(message) {
    this.toastyService.clearAll();
    this.toastOptions.msg = message;
    this.toastyService.success(this.toastOptions);
  }

  showError(message) {
    this.toastyService.clearAll();
    this.toastOptions.msg = message;
    this.toastyService.error(this.toastOptions);
  }

  showWarning(message) {
    this.toastyService.clearAll();
    this.toastOptions.msg = message;
    this.toastyService.warning(this.toastOptions);
  }

  showWait(message) {
    this.toastyService.clearAll();
    this.toastOptions.msg = message;
    this.toastyService.wait(this.toastOptions);
  }

  showInfo(message) {
    this.toastyService.clearAll();
    this.toastOptions.msg = message;
    this.toastyService.info(this.toastOptions);
  }
}
