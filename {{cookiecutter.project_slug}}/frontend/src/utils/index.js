import { Alert, Linking } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

import Config from '../constants/config';


/**
 * Global Util Functions
 *
 */
const Utils = {
  // Dev Site URL
  serverUrl: Config.API_URL.DEV,
  // Live Site URL
  // serverUrl: Config.API_URL.PROD,

  /**
    * Checks if the input string is a valid email address
    */
  isValidEmail: (emailStr) => {
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (reg.test(emailStr) === false) {
      return false;
    }

    return true;
  },

  numberformatter: (number, decimals, decimalPoint, thousandsSeparator) => {
    const num = !Number.isFinite(+number) ? 0 : +number;
    const precision = !Number.isFinite(+decimals) ? 0 : Math.abs(decimals);
    const separator = (typeof thousandsSeparator === 'undefined') ? ',' : thousandsSeparator;
    const decimal = (typeof decimalPoint === 'undefined') ? '.' : decimalPoint;

    const toFixedFix = (n, prec) => {
      const k = 10 ** prec;
      return Math.round(n * k) / k;
    };

    const s = (precision ? toFixedFix(num, precision) : Math.round(num)).toString().split('.');

    if (s[0].length > 3) {
      s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, separator);
    }

    if ((s[1] || '').length < precision) {
      s[1] = s[1] || '';
      s[1] += new Array(precision - (s[1].length + 1)).join('0');
    }

    return s.join(decimal);
  },

  // convert true/false string to bool
  stringToBool: string => (
    string === 'true'
  ),

  // opens a WebView from a URL
  openURL: (url) => {
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      }
    }).catch(error => Utils.showAlertError(error));
  },

  // resets navigation with the selected route
  resetNavigationForRoute: route => (
    StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: route }),
      ],
    })
  ),

  // shows an error alert
  showAlertError: (message) => {
    Alert.alert(
      'Error',
      message,
      [
        { text: 'OK' },
      ],
    );
  },

  // creates a list with a range of numbers starting from 0
  range: end => [...Array(end)].map((_, index) => index),

  // creates a list with a range of numbers with start and end values
  rangeFrom: (start, end) => (Array(end - start).fill().map((_, index) => index + start)),
};

export default Utils;
