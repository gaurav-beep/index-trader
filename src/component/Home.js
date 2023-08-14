import React, { Component } from 'react'
import axios from 'axios'
export default class Home extends Component {
    state={
        records:{},
        filtered:{}
    }
    componentDidMount(){
        this.loadData();
    }
    loadData = async ()=> {
        const url = `https://www.nseindia.com/api/option-chain-indices?symbol=BANKNIFTY`;
        let data = await axios.get(url);
        let parsedData = await data.json()
        console.log("parsedData:"+parsedData)
    }
    
  render() {
    return (
      <table>
        <thead></thead>
        <tbody></tbody>
      </table>
    )
  }
}
