import React, {useState} from 'react';
import style from './ChartBar.module.css';




function ChartBar(props) {
  const [isTrue, setIsTrue] = useState(false);

  let barHeight = '0%';
  barHeight = Math.round((props.value / props.maxValue)* 100) + '%'


  const turningTrue = () => {
    
      setIsTrue(true);
  }

  const turningFalse = () => {
    setIsTrue(false);
  }

  return (
    <div className={style.chartBar}>
      {isTrue &&  
      <div className={style.value} > {`$${props.value}`}</div> 
}

      <div className={style.chartBarInner} >
        <div className={style.chartBarFill} style={{height: barHeight} } onMouseOver={turningTrue} onMouseOut={turningFalse} ></div>
      </div>
      <div className={style.label}> {props.label}</div>
    </div>
  )
}

export default ChartBar