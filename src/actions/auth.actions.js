import Swal from 'sweetalert2';
import { fetchWithoutToken, fetchWithToken } from '../helpers/fetch';
import { types } from '../types/types';

export const startLogin = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetchWithoutToken(
        'auth',
        { email, password },
        'POST'
      );

      const body = await response.json();

      if (body.ok) {
        localStorage.setItem('token', body.token);
        localStorage.setItem('token-init-date', new Date().getTime());

        dispatch(
          login({
            uid: body.uid,
            name: body.name,
          })
        );
      } else {
        Swal.fire('Error', body.msg, 'error');
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const startRegister = (email, password, name) => {
  return async (dispatch) => {
    try {
      const response = await fetchWithoutToken(
        'auth/new',
        { name, email, password },
        'POST'
      );

      const body = await response.json();

      if (body.ok) {
        localStorage.setItem('token', body.token);
        localStorage.setItem('token-init-date', new Date().getTime());

        dispatch(
          login({
            uid: body.uid,
            name: body.name,
          })
        );
      } else {
        Swal.fire('Error', body.msg, 'error');
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const startChecking = () => {
  return async (dispatch) => {
    try {
      const response = await fetchWithToken('auth/renew');
      const body = await response.json();

      if (body.ok) {
        localStorage.setItem('token', body.token);
        localStorage.setItem('token-init-date', new Date().getTime());

        dispatch(
          login({
            uid: body.uid,
            name: body.name,
          })
        );
      } else {
        dispatch(checkingFinish());
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const checkingFinish = () => ({
  type: types.authCheckingFinish,
});

const login = (user) => ({
  type: types.authLogin,
  payload: user,
});

export const startLogout = () => {
  return (dispatch) => {
    localStorage.clear();
    dispatch(logout());
  };
};

const logout = () => ({
  type: types.authLogout,
});
