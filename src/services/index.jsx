import axios from 'axios';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const baseURL = ``;
function api(url, method, data) {
  const token = localStorage.getItem('token');
  return axios({
    baseURL,
    url,
    method,
    data,
    headers: {
      'Accept-Language': 'es',
      Authorization: `Bearer ${token}`
    }
  });
}
function apiNoToken(url, method, data) {
  return axios({
    baseURL,
    url,
    method,
    data,
    headers: {
      'Accept-Language': 'es'
    }
  });
}

const ValidateError = (err) => {
  try {
    const ErrorMsg = err?.response?.data || {};
    if (typeof ErrorMsg === 'object') {
      for (const key in ErrorMsg) {
        if (Object.hasOwnProperty.call(ErrorMsg, key)) {
          const element = ErrorMsg[key];
          toast.error(`${key}: ${element}`, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: 'light'
          });
        }
      }
      return ErrorMsg;
    }

    return ErrorMsg;
  } catch (er) {
    return err;
  }
};

export default class ApiConsumer {
  constructor({ url }) {
    this.url = url;
  }

  async petition(body, type) {
    try {
      const { data } = await apiNoToken(this.url, type, body);
      return data;
    } catch (error) {
      return ValidateError(error);
    }
  }

  async getAll(query) {
    try {
      const { data } = await api(`${this.url}${query || ''}`, 'GET');
      return data;
    } catch (error) {
      return ValidateError(error);
    }
  }

  async getById(id) {
    try {
      const { data } = await api(`${this.url}/${id}`, 'GET');
      return data;
    } catch (error) {
      return ValidateError(error);
    }
  }

  async create(body) {
    try {
      const { data } = await api(this.url, 'POST', body);
      return data;
    } catch (error) {
      return ValidateError(error);
    }
  }

  async update(body) {
    try {
      const { data } = await api(`${this.url}/${body?.id}`, 'PUT', body);
      return data;
    } catch (error) {
      return ValidateError(error);
    }
  }

  async delete(id) {
    try {
      const { data } = await api(`${this.url}/${id}`, 'DELETE');
      return data;
    } catch (error) {
      return ValidateError(error);
    }
  }
}
