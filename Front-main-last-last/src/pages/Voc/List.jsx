import {
    Main,
    MediaDiv,
} from '../Voc/styledComponent';

import ShowPostList from '../Voc/ShowPostList';


import { darkTheme, GlobalStyles, lightTheme } from '../Voc/styles';
import { useState } from 'react'; import Voc from './Voc';
;

function List() {
    const initialPostList = [
        { id: 1, title: '명지톡톡!', replCount: 1 },
        { id: 2, title: '오늘 학식 어때', replCount: 2 },
        { id: 3, title: '버스 줄 많나요', replCount: 3 },
    ];
    const [darkMode, setDarkMode] = useState(true);
    const [loading, setLoading] = useState(false);
    const [isPost, setIsPost] = useState(false)
    const [postList, setPostList] = useState(initialPostList);

    const addPost = () => {
        setPostList((postList) => [
            ...postList, { id: 4, title: '기말 파이팅~!', replCount: 4 },
        ]);
    };

    return (
        <>
            
                <ShowPostList loading={loading} isPost={isPost} postList={postList} addPost={addPost} />




        </>
    )
}

export default List;