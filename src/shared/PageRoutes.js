import React, { Component } from 'react'
import {
    Routes,
    Route
  } from "react-router-dom";
import AboutUs from '../component/AboutUs';
import Home from '../component/Home';
import PrivacyPolicy from '../component/PrivacyPolicy';

export default class PageRoutes extends Component {
  render() {
    return (
        <Routes>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
      </Routes>
    )
  }
}
