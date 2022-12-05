
import { useEffect, useState, navigate } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import GetpsForm from '../../components/GetpsForm';
import Getps from '../../components/Getps';
import Navbar from '../../components/Navbar/Navbar';


export default function Getpass() {
  return (
    <div>
      <Getps />
    </div>
  )
}