import React from 'react'
const { useContext } = React
import styles from '../../styles/Home.module.scss'

import context from '../../context/AppContext'
const { AppContext } = context

import Card from '../Card'
import NotFound from '../NotFound'

const CardList = () => {
  const { pictures } = useContext(AppContext)
  const isShowContent = pictures.length >= 1

  return (
    <div>
      {
         isShowContent ?
        (
          <div className={styles.picturesContainer}>
            { pictures.map(pic => <Card key={pic.id} picture={pic}/>)}
          </div>
        ) :
        <NotFound/>
      }
    </div>
  )
}

export default CardList;
