import React, { Component } from 'react'
import Nav from './component/Nav'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Contact from './component/Contact'
import Feedback from './component/Feedback'
import Gallery from './component/Gallery'
import Event from './component/Event'

export class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/gallery' element={<Gallery />}/>
          <Route path='/event' element={<Event />}/>
          <Route path='/feedback' element={<Feedback />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </div>
    )
  }
}

export default App