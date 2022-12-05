import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './VocQuestion.css';
import { data } from 'jquery';
import Navbar from '../../components/Navbar/Navbar';


const API_END_POINT = 'http://43.200.116.196:8080';



const GetCategory = () => {
    const [category, setCategory] = useState(['아']);
    const navigate = useNavigate();

    const useEffect = (e) => {
        e.preventDefault();

        axios.post(`${API_END_POINT}/api/boards`, {
            categories: category,
        })
        .then(function (res) {
            console.log(res.result.data.categories)
            setCategory(res.data)
        })
    }

    /*useEffect(() => {
        axios.get('http://43.200.116.196:8080/api/boards/').then((response) => {
            setCategory(response.data);
        })
    }, []);
    */

    const categories = (Object.values(category)).map((item) => (
        <option key={item.id} value={item.id}>
            {item.displayName}
        </option>
    ));

    return categories;
}

const HandleQuestionSubmit = async ({ body }) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem("SavedToken")
    }

    const response = await axios.post(`${API_END_POINT}/api/boards`, body, { headers:{ AxiosHeaders: localStorage.getItem('SavedToken',) }  }).then((response) => {
        console.log('status : ' + response.status);
    }).catch((error) => {
        console.log('error : ' + error);
    });

    const token = localStorage.getItem('SavedToken');

    return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : "",
        }
    }
}

function VocQuestion() {
    const categories = GetCategory();

    const [categoryId, setCategoryId] = useState(1);
    const [title, setTitle] = useState('');
    const [email, setEmail] = useState('');
    const [content, setContent] = useState('');
    const [stationId, setStationId] = useState('ST-4');

    const body = {
        categoryId: categoryId,
        title: title,
        content: content,
        email: email,
        stationId: stationId
    }

    return (<>
        
      <h1>
        <Navbar
          nav1="기숙사"
          nav2="버스" />
      </h1>
      
      
        <h2 align="center">게시글 작성</h2>
        <div className="voc-view-wrapper">
            <div className="voc-view-row">
                <label>유형</label>
                <select onChange={(event) => setCategoryId(parseInt(event.target.value))}>
                    {categories}
                </select>
            </div>
            
            <div className="voc-view-row">
                <label>제목</label>
                <input onChange={(event) => setTitle(event.target.value)}></input>
            </div>
            <div className="voc-view-row">
                <label>내용</label>
                <textarea onChange={(event) => setContent(event.target.value)}></textarea>
            </div>
            <Link to='/dorm'>
                <button className="voc-view-go-list-btn" onClick={() => HandleQuestionSubmit({ body })}>등록</button>
                </Link>

        </div>
    </>);
}

export default VocQuestion;