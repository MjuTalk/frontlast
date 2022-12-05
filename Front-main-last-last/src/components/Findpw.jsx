import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/index.css';


export default function Findpw() {
  const [findpw, setFindpw] = useState("");
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();


  const handleChange = ({ target: { value } }) => setFindpw(value);

  const handleSubmit = async (event) => {
    setDisabled(true);
    event.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));
    if (findpw.length < 4) {
      alert("4자의 이상의 비밀번호를 사용하셔야 합니다.");
    } else {
      alert(`변경된 비밀번호: ${findpw}`);
      goToSignIn()
    }
    setDisabled(false);
  };
  const goToSignIn = () => {
    navigate('/');
}

  return (
    <div>
            <h1 className='titleWrap'>
                비밀번호 변경
            </h1>
    <div className='page'>
        <div className='contentWrap'>
            <form onSubmit={handleSubmit}>
              <label className="inputTitle">변경할 비밀번호</label>
              <div className="inputWrap">
                <input
                    type="findpw"
                    name="findpw"
                    className="input"
                    value={findpw}
                    onChange={handleChange}
                />
            </div>
     

      <button className='buttonWrap' disabled={disabled}>
        비밀번호 변경하기
      </button>
    </form>
    </div>
    </div>
    </div>
  );
}