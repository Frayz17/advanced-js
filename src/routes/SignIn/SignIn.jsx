import React from 'react';
import { getState } from 'Services/Store';

export default () => {
  console.log(getState());
  return <b>SignIn page</b>;
};
