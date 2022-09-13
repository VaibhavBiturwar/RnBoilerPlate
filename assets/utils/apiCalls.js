import {AlertComponent} from '../../src/components/alertComponent';

export const apiGET = async endpoint => {
  const response = await fetch(endpoint, {
    method: 'GET',
    //   headers: new Headers({
    //     Authorization: 'Bearer ' + authData?.loginToken,
    //     Accept: 'application/json',
    //   }),
  });
  const res = await response.json();
  if (res.status == 'false') {
    console.warn('false');
    AlertComponent(res.message, 'Please try again later');
  }
  return res;
};
