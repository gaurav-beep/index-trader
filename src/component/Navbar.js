import React, { Component } from 'react'
import {
  Link
} from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
     <>
       <nav>
        <div className='h-fit w-full bg-black text-white d-flex text-center'>
        <Link to="/home" className='px-2'>Home</Link>
        <Link to="/aboutus" className='px-2'>About Us</Link>
        <Link to="/privacypolicy" className='px-2'>Privacy Policy</Link>
        </div>
       </nav>
      </>
    )
  }
}
