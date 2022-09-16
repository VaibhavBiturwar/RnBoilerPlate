import { LOGGEDIN, LOGGEDINAS, USERS } from "./reduxContstants";
import * as APIS from "../../assets/utils/apiCalls";
import * as URLS from "../../assets/utils/urls";

export const authenticateUser = (callback) => {
  try {
    return async (dispatch, getState) => {
      // Calling get API
      const responseData = await APIS.apiGET(URLS.login);
      // Manupulating data on based of response
      if (responseData && responseData.status == "true") {
        // console.log(responseData);
        dispatch({ type: LOGGEDINAS, LOGGEDINAS: responseData.data });
        dispatch({ type: LOGGEDIN, LOGGEDINAS: true });
        if (callback) callback(true, responseData.data);
      } else {
        console.log("Error Occurred in login");
        console.log(responseData);
        if (callback) callback(false);
      }
    };
  } catch (error) {
    console.log("Error in authenitcation: ", error);
  }
};

export const getUsers = (callback) => {
  try {
    return async (dispatch, getState) => {
      // Calling get API
      let response = await fetch(URLS.users, {
        method: "GET",
      });

      response = await response.json();
      if (response.data) {
        dispatch({ type: USERS, USERS: response.data });
        if (callback) callback(true);
      } else {
        console.log("Users Data not available");
        if (callback) callback(false);
      }
    };
  } catch (error) {
    console.log("Error while getting users: ", error);
  }
};
