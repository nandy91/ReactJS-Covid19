import React from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryChooser from './components/CountryChooser/CountryChooser';
import styles from './App.module.css';
import {fetchData} from './api/index';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      data: {}
    }
  }
  async componentDidMount() {
    const fetchedData = await fetchData();
    console.log(fetchedData);
    this.setState({data:fetchedData})
  }
  render() {
    return (
      <div className={styles.container}> 
      <h1>
        COVID-19 APP
    </h1>
    <Cards data={this.state.data}/>
    <Chart />
    <CountryChooser />
    </div>

    );
  }
}


export default App;
