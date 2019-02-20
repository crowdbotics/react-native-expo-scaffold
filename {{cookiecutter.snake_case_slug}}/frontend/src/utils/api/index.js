import _ from 'lodash';

import APIConstants from './constants';
import APIUtils from './utils';


class APIClient {
  constructor(url, method) {
    this.url = url;
    this.method = method;
  }

  fetchRequest = (url, fetchParams, resolve, reject) => {
    fetch(url, fetchParams)
      .then(async (response) => {
        if (!response.ok) {
          const data = await response.json();

          throw Error(data.message);
        }

        return response;
      })
      .then(response => response.json())
      .then((responseData) => {
        resolve(responseData);
      })
      .catch((error) => {
        reject(error);
      });
  }

  performRequest = (headers, params, authorize, authType = null) => (
    new Promise(async (resolve, reject) => {
      const defaultHeaders = {
        Accept: APIConstants.ContentType.JSON,
        'Content-Type': APIConstants.ContentType.JSON,
      };

      const fetchParams = {
        method: this.method,
        headers: {
          ...defaultHeaders,
          ...headers,
        },
      };

      if (_.size(params) > 0) {
        switch (this.method) {
          case APIConstants.HTTPMethod.GET:
          case APIConstants.HTTPMethod.DELETE:
            this.url = this.url + APIUtils.convertQueryString(params);

            break;
          case APIConstants.HTTPMethod.POST:
          case APIConstants.HTTPMethod.PUT:
            fetchParams.body = JSON.stringify(params);

            break;
          default:
            return;
        }
      }

      if (authorize) {
        APIUtils.getAccessToken().then((token) => {
          fetchParams.headers.Authorization = `${authType} ${token}`;

          this.fetchRequest(this.url, fetchParams, resolve, reject);
        });
      } else {
        this.fetchRequest(this.url, fetchParams, resolve, reject);
      }
    })
  )

  sendAuthenticatedRequest(authType, params = {}, headers = {}) {
    return this.performRequest(headers, params, true, authType);
  }

  sendRequest(params = {}, headers = {}) {
    return this.performRequest(headers, params, false);
  }
}

export default APIClient;
