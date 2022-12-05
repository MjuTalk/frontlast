import { useEffect, useState, navigate } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SignForm from '../../components/SignForm';
import Sign from '../../components/Sign';
import Navbar from '../../components/Navbar/Navbar';


export default function SignUp() {
  return (
    <div>
      <Sign />
    </div>
  )
}
