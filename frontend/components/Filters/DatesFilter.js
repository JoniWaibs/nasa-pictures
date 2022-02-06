import React from 'react'
const { useState } = React
import styles from '../../styles/Home.module.scss'

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { format } from 'date-fns'

const DatesFilter = ({getPicturesByConfig}) => {
  const [PictureByDate, setPictureByDate] = useState(new Date())

  return (
    <div className={styles.filtersWrapper}>
      <p>Select by Date</p>
      <div className={styles.pickerContainer}>
        <DatePicker
          className={styles.picker}
          selected={PictureByDate}
          onChange={(date) => {
            getPicturesByConfig({ earth_date : format(new Date(date), 'yyyy-MM-dd')})
            setPictureByDate(date)
          }}
        />
      </div>
  </div>
  )
}

export default DatesFilter
