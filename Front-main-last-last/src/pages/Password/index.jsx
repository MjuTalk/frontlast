
import { useEffect, useState, navigate } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Findpw from '../../components/Findpw';
import Navbar from '../../components/Navbar/Navbar';


export default function Password() {
  return (
    <div>
      <Findpw />

    </div>
  )
}