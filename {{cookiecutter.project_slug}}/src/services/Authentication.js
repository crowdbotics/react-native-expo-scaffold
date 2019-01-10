import Utils from '../utils';
import APIClient from '../utils/api';
import APIConstants from '../utils/api/constants';


const loginAPI = (username, password) => {
  const path = '/';
  const url = `${Utils.serverUrl}${path}`;
  const params = {
    username,
    password,
  };

  const client = new APIClient(url, APIConstants.HTTPMethod.POST);

  return client.sendRequest(params);
};

const signupAPI = (username, password, confirmPassword) => {
  const path = '/';
  const url = `${Utils.serverUrl}${path}`;
  const params = {
    username,
    password,
    confirmPassword,
  };

  const client = new APIClient(url, APIConstants.HTTPMethod.POST);

  return client.sendRequest(params);
};

export { loginAPI, signupAPI };
