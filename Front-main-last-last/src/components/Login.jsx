import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/index.css';



const API_END_POINT = 'http://43.200.116.196:8080';

const Login = () => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const navigate = useNavigate();


    const onSubmit = (e) => {
        e.preventDefault();
        axios
            .post(`${API_END_POINT}/api/sign-in`, {
                username: id,
                password: pw,
            })
            .then(function (response) {
                alert("로그인 성공!");
                let originToken = response.data.originToken;
                let refreshToken = response.data.refreshToken;
                localStorage.setItem("SavedToken", 'Bearer ' + response.data.originToken);
                goToMain();

                
                // // //로그인 성공시
                if (response.code === 200) {
                    alert("dd")
                    localStorage.setItem('login-token', originToken);
                } else if (response.code === 404) {
                    alert(response.result.message);
                }
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
                alert('로그인 실패.');
            });
    };

    const handleId = (e) => {
        setId(e.target.value);
    }

    const handlePw = (e) => {
        setPw(e.target.value)
    }

    

    const goToMain = () => {
        navigate('/home');
    };

    const goToSignUp = () => {
        navigate('/sign-up');
    }

    const goToPassword = () => {
        navigate('/new-password');
    }

    const goToGetpass = () => {
        navigate('/get-password');
    }



    return (
        <div>
            <h1 className='titleWrap'>
                명지톡톡
            </h1>
            <div className='page'>
                <div className='contentWrap'>
                    <form onSubmit={onSubmit} className="login_form">
                        <label className="inputTitle">아이디</label>
                        <div className="inputWrap">
                            <input
                                type="text"
                                className="input"
                                value={id}
                                onChange={handleId}
                            />
                        </div>
                        <label className="inputTitle">비밀번호</label>
                        <div className="inputWrap">
                            <input
                                type="password"
                                className="input"
                                value={pw}
                                onChange={handlePw}
                            />
                        </div>
                    </form>

                    <div>
                        <button className='buttonWrap' onClick={onSubmit}>
                            로그인
                        </button>
                        <button className='buttonWrap' onClick={goToSignUp}>
                            회원가입
                        </button>
                        <button className='buttonWrap' onClick={goToPassword}>
                            비밀번호 변경
                        </button>
                        <button className='buttonWrap' onClick={goToGetpass}>
                            비밀번호 재발급
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;

