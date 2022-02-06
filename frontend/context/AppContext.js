import React from 'react';
import { createContext, useState } from 'react';

const AppContext = createContext({})
const { Provider, Consumer: AppConsumer } = AppContext;

import initialState from '../enums/initialState'
const { INITIAL_LOADING, INITIAL_STATE } = initialState

const AppProvider = ({children}) => {
  const [pictures, setPictures] = useState(INITIAL_STATE)
  const [isLoading, setIsLoading] = useState(INITIAL_LOADING)

  const values = { pictures, setPictures, isLoading, setIsLoading }

  return (
    <Provider value={values}>
      {children}
    </Provider>
  )
}

export default {
  AppContext,
  AppProvider,
  AppConsumer,
}
