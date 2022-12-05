import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import BusSheet from '../../components/BusSheet'
import Station from '../../components/Station'
import imgfile1 from '../../img/gi.png'
import imgfile2 from '../../img/school.png'

export default function index() {
  return (
    <div>
      <h1>
        <Navbar
          nav1="기숙사"
          nav2="버스" />
      </h1>
      <div>

      </div>
      
        <img src={imgfile1} />
        <img src={imgfile2} />
      
      
    </div>
  )
}
