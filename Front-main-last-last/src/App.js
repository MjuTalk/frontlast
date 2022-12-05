import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Dorm from './pages/Dorm'
import Bus from './pages/Bus'
import Voc from './pages/Voc/Voc';
import VocView from './pages/Voc/VocView';
import VocQuestion from './pages/Voc/VocQuestion';
import BusSheet from './pages/BusSheet';
import Password from './pages/Password';
import Getpass from './pages/Getpass';

function App() {
  return (
      <div className='root-wrap'>
        <RecoilRoot>
          <BrowserRouter>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/dorm" element={<Dorm />} />
              <Route path="/bus" element={<Bus />} />
              <Route path="/bus/sheet" element={<BusSheet />} />
              <Route path='/voc' element={<Voc />} /> 
              <Route path='/voc/:vocId' element={<VocView />} /> 
              <Route path='/voc/question' element={<VocQuestion />} /> 
              <Route path="/new-password" element={<Password />} />
              <Route path="/get-password" element={<Getpass />} />

            </Routes>
          </BrowserRouter>
        </RecoilRoot>
      </div>
  );
}

export default App;
