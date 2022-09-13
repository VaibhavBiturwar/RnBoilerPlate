import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {DashboardNavigator} from '../../navi/dashNavigator';

export const Dashboard = ({route, navigator}) => {
  return (
    <>
      {/* <NavigationContainer independent={true}> */}
      <DashboardNavigator />
      {/* </NavigationContainer> */}
    </>
  );
};
