import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_END_POINT = 'http://43.200.116.196:8080';

const BusSheet = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [stop, setStop] = useState(null);


  const fetchUsers = (e) =>
    e.preventDefault();
  axios
    .get(`${API_END_POINT}/api/bus`, {
      stop_nm: stop
    })
    .then(function (response) {
      alert("로그인 성공!");
      setStop(response.data);

      if (response.code === 200) {
        console.log(response);
        alert("에러");
        
      }
      else if (response.status === 401) {
        console.log(response);
        alert("zz");
      } 
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}




/*
    useEffect(() => {
      const fetchUsers = async () => {
        try {
          // 요청이 시작 할 때에는 error 와 users 를 초기화하고
          setError(null);
          setUsers(null);
          // loading 상태를 true 로 바꿉니다.
          setLoading(true);
          const response = await axios.get(
            'http://43.200.116.196:8080/api/bus'
          );
          setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
        } catch (e) {
          setError(e);
        }
        setLoading(false);
      };
  
      fetchUsers();
    }, []);
  
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!users) return null;
    return (
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
    );
  }
  */


export default BusSheet;