import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Home2 from '../../components/Navbar/Board/Home2'
import Header from '../../components/Header'

export default function Home() {
  return (
    <div>
    <h1>
      <Navbar
      nav1="기숙사"
      nav2="버스" />
    </h1>
    <div>
      <Home2 />
    </div>
    </div>
  )
}