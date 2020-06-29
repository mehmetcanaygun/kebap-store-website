import React, { useReducer } from "react";
import SiteContext from "./siteContext";
import SiteReducer from "./siteReducer";
import { SET_LOADING } from "./types";

const SiteState = (props) => {
  const initialState = {
    loading: false,
  };

  const [state, dispatch] = useReducer(SiteReducer, initialState);

  // Set Loading
  const setLoading = (condition) => {
    dispatch({
      type: SET_LOADING,
      payload: condition,
    });
  };

  return (
    <SiteContext.Provider
      value={{
        loading: state.loading,
        setLoading,
      }}
    >
      {props.children}
    </SiteContext.Provider>
  );
};

export default SiteState;
