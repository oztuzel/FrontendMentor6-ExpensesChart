import logo from './images/logo.svg';
import Chart from './components/Chart';

import style from './App.module.css';


function App() {
  return (
    <div className={style.app}>
      <div className={style.balance}>
        <p>My balance</p>
        <h1>$921.48</h1>
        <img src={logo} alt='logo' className={style.logo} />
      </div>
      <div className={style.card}>
        <h1 className={style.cardDiv}>Spending - Last 7 days</h1>
        <Chart />
        <div className={style.lower}>
          <p className={style.total}>Total this month</p>
          <h1>$478.33</h1>
          <p className={style.percentage}>+2,4% <br/></p>
          <p className={style.p}> from last month </p>
        </div>
      </div>
    </div>
  );
}

export default App;
