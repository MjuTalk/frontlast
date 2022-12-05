import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/index.css';

const API_END_POINT = 'http://43.200.116.196:8080';

const Signup = () => {
  const [name, setName] = useState('');
  const [major, setMajor] = useState('');
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [stnum, setStnum] = useState('');
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${API_END_POINT}/api/sign-up`, {
        username: id,
        password: pw,
        name: name,
        subject: major,
        studentId: stnum,
      })
      .then(function (response) {
        if (response.code === 201) {
          console.log(response);
          alert('회원가입이 완료되었습니다.');
          goToSignIn()
        }
        if (response.code === 409) {
          console.log(response);
          alert(response.result.message);
        } else {
          alert('회원가입이 완료되었습니다.');
          goToSignIn()
        }
      })
      .catch(function (error) {
        alert('회원가입 실패. 다시 입력해 주세요.');
        
        console.log(error);
      });
  };


const goToSignIn = () => {
    navigate('/');
}


  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeMajor = (e) => {
    setMajor(e.target.value);
  };
  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangePw = (e) => {
    setPw(e.target.value);
  };
  const onChangeStnum = (e) => {
    setStnum(e.target.value);
  };

  /**추가**/
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleBar, setToggleBar] = useState(true);

  const toggleChange = () => {
    setToggleMenu(!toggleMenu);
    setToggleBar(!toggleBar);
  };

  const onMenuClick = () => {
    setToggleMenu(!toggleMenu);
    setToggleBar(!toggleBar);
  };
  /**추가**/

  return (
    <div>
      
       <h1 className='titleWrap'>
                명지톡톡
                회원가입
            </h1>
            
        <div className='page'>
                <div className='contentWrap'>
            <form onSubmit={onSubmit} className="sign_form">
              
               <label className="inputTitle">아이디</label>
                        <div className="inputWrap">
                            <input
                                type="text"
                                className="input"
                                value={id}
                                onChange={onChangeId}
                            />
                        </div>

               <label className="inputTitle">비밀번호</label>
                        <div className="inputWrap">
                            <input
                                type="text"
                                className="input"
                                value={pw}
                                onChange={onChangePw}
                            />
                        </div> 
                <label className="inputTitle">이름</label>
                        <div className="inputWrap">
                            <input
                                type="text"
                                className="input"
                                value={name}
                                onChange={onChangeName}
                            />
                        </div>        
                <label className="inputTitle">학과</label>
                        <div className="inputWrap">
                            <input
                                type="text"
                                className="input"
                                value={major}
                                onChange={onChangeMajor}
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
                회원가입 완료
              </button>
            </form>
          </div>

      </div>
    </div>
  );
};

export default Signup;