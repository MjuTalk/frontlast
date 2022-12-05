import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/index.css';


const API_END_POINT = 'http://43.200.116.196:8080';

const Getpass = () => {
 
  const [id, setId] = useState('');
  const [stnum, setStnum] = useState('');
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${API_END_POINT}/api/password`, {
        username: id,
        studentId: stnum,
      })
      .then(function (response) {
        if (response.code === 200) {
          console.log(response);
          alert(`변경된 비밀번호: `);
          goToSignIn()
        }
        if (response.code === 404) {
          console.log(response);
          alert(response.result.message);
        } else {
          alert(`변경된 비밀번호: `);
          goToSignIn()
        }
      })
      .catch(function (error) {
        alert('1209829227');
        
        console.log(error);
      });
  }

const goToSignIn = () => {
    navigate('/ ');
}


  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangeStnum = (e) => {
    setStnum(e.target.value);
  };

  
  return (
    <div>
      
       <h1 className='titleWrap'>
                비밀번호 재발급
            </h1>
            
        <div className='page'>
                <div className='contentWrap'>
            <form onSubmit={onSubmit} className="getps_form">
              
               <label className="inputTitle">아이디</label>
                        <div className="inputWrap">
                            <input
                                type="text"
                                className="input"
                                value={id}
                                onChange={onChangeId}
                            />
                        </div>

                  <label className="inputTitle">학번</label>
                        <div className="inputWrap">
                            <input
                                type="text"
                                className="input"
                                value={stnum}
                                onChange={onChangeStnum}
                            />
                        </div> 

              <button
               
                className="buttonWrap"
                type="primary"
                htmlType="submit"
              >
                재발급 받기
              </button>
            </form>
          </div>

      </div>
    </div>
  );

}

export default Getpass;