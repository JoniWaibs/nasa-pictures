import React from 'react'
const { useContext } = React
import styles from '../../styles/Home.module.scss'

import context from '../../context/AppContext'
const { AppContext } = context;

import filters from '../../components/Filters'
const { CamerasFilter, DatesFilter } = filters

import { Service as ApiService } from '../../services'

const Header = () => {
  const { setIsLoading, setPictures} = useContext(AppContext);

  const getPicturesByConfig = async (customConfig) => {
    const params = customConfig
    setIsLoading(true)
    try {
      const { data } = await new ApiService(params).getPictures()
      setPictures(data)
    } catch (error) {
      setPictures([])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <header className={styles.header}>
      <h1>
        Welcome to <a href="https://nextjs.org">NASA PICS!</a>
      </h1>

      <CamerasFilter getPicturesByConfig={getPicturesByConfig}/>
      <DatesFilter getPicturesByConfig={getPicturesByConfig}/>
    </header>
  )
}

export default Header
