import React, { useState, useEffect, useContext, useReducer } from "react";
import data from './data'
import Reducer from "./Reducer";


const AppContext = React.createContext();


const initialState = {
  loading: false,
  cart: data,
  total: 0,
  amount: 0,
}


const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState)

  const clearCart = () => {
    dispatch( {type: 'CLEAR_CART'})
  }

  const remove = (id) => {
    dispatch( {type: 'REMOVE', payload: id})
  }

  const increase = (id) => {
    dispatch( {type: 'INCREASE', payload: id})
  }

  const decrease = (id) => {
    dispatch( {type: 'DECREASE', payload: id})
  }

  const toggleAmount = (id, type) => {
    dispatch({type: 'TOGGLE_AMOUNT', payload: {id, type}})
  }

  useEffect( () => {
    dispatch( { type: 'GET_TOTALS'})
  }, [state.cart])
  return (
    <>
    <AppContext.Provider value={ {
      ...state, 
      clearCart, 
      remove,
      increase,
      decrease,
      toggleAmount,
      }}>
      {children}
    </AppContext.Provider>
    </>
  );
}

//make sure use
export const useGlobalContext = () => {
 return useContext(AppContext)
}

export { AppContext, AppProvider}
