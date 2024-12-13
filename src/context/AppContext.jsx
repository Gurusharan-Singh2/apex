import { createContext, useState } from "react";
import { doctors } from "../assets/assets";

export const AppContext=createContext();

const AppContextProvider=(props)=>{

  const currencySymbol='₹'
  const [userState,SetuserState]=useState('user');
  const value={
    doctors,
    currencySymbol,
    userState,
    SetuserState
    
  }
  return (
    <AppContext.Provider value={value}>
      {props.children}

    </AppContext.Provider>
  )
}

export default AppContextProvider;