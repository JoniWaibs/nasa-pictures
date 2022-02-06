import React from 'react'
import styles from '../../styles/Home.module.scss'
import roverCameras from '../../enums/defaultCameras'

const CamerasFilter = ({getPicturesByConfig}) => {

  return (
    <div className={styles.filtersWrapper}>
      <p>Select by Camera</p>
      <div className={styles.btnGroup} >
        {
          Object.keys(roverCameras).map(camera =>
            <button
              className={styles.selectBtn}
              type="button"
              key={camera}
              onClick={(() => getPicturesByConfig({camera, sol: 1000}))
            }>
            {camera}
            </button>
          )
        }
      </div>
    </div>
  )
}

export default CamerasFilter
