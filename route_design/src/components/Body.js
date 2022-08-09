import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Body extends Component {
  render() {
    return (
        <div className='rel'>
      <div className='body'>
        <div className='content'>
            <span>Make up to $35/hr</span>
            <span>Driving Your Car</span>
        </div>
        <div className='form'>
            <span className='apply'>Apply Now</span>
            <p>Enter the info and then download the lyft app and create your driver profile.</p>
            <form>
                <input placeholder='first name'/>
                <input placeholder='last name'/>
                <input placeholder='email  address'/>
                <input placeholder='city'/>
                <input placeholder='mobile'/>
                <input placeholder='promo code (optional)'/>
                <div>
                <input type='checkbox'/><span>I agree to <Link to='/help'>lyft terms</Link></span></div>
                <button onClick={(event)=>event.preventDefault()}>Become A Driver</button>
                <p><span>Already applied?</span><Link to='/drive'>check the status of your application here</Link></p>
            </form>
        </div>
      </div>
      <div className='extra'>
        <p className='see'>See How Much You Can Make</p>
        <span>How many hours you want to drive this week</span>
        <div className='extrainputbutton'>
            <input placeholder='Hours'/>
            <input placeholder='City'/>
            <button>Calculate</button>
        </div>
      </div>
      </div>
    )
  }
}

export default Body