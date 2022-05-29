import React from 'react';
import style from './Chart.module.css';
import ChartBar from './ChartBar';
import data from '../data';

function Chart() {
  const dataPointValues = data.map( (data) => data.amount ) 
  const maxValue = Math.max(...dataPointValues);
  
  
  
  return (
    <div className={style.chart}>
      
      {data.map((data, index) => {
        const {day, amount} = data
        return (
          <ChartBar value={amount} 
                    maxValue={maxValue} 
                    key={day}
                    label={day}

          />
        
        )
      })
      }
      
    </div>
  )
}

export default Chart