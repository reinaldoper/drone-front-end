import Swal from 'sweetalert2';

export const showAlert = (status, message) => {
  Swal.fire({
    title: status,
    text: message,
    icon: 'error',
    confirmButtonText: 'OK'
  });
};

export const showAlertSucces = (status, message) => {
  Swal.fire({
    title: status,
    text: message,
    icon: 'success',
    confirmButtonText: 'OK'
  });
};

