import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VocHeader from '../../components/voc/VocHeader';
import { Link } from 'react-router-dom';

import CommonTable from '../../components/Table/CommonTable';
import CommonTableColumn from '../../components/Table/CommonTableColumn';
import CommonTableRow from '../../components/Table/CommonTableRow';

function GetData() {
    const [data, setData] = useState({});
    useEffect(() => {
        axios.get('http://43.200.116.196:8080/api/boards/').then((response) => {
            setData(response.data);
        })
    }, []);
    const item = (Object.values(data)).map((voc) => (
        <CommonTableRow key={voc.id}>
          <CommonTableColumn>{voc.id}</CommonTableColumn>
          <CommonTableColumn>
            <Link to={`/voc/${voc.id}`}>
              {voc.title}
            </Link>
          </CommonTableColumn>
          <CommonTableColumn>{voc.createAt}</CommonTableColumn>
          <CommonTableColumn>{voc.username}</CommonTableColumn>
        </CommonTableRow>
      ));

    return item;
}

function Voc() {
    const item = GetData();

    return (<>
        <VocHeader></VocHeader>
        <CommonTable headersName={[' ', '제목', '글번호']}>
            {item}
        </CommonTable>
    </>);
}

export default Voc;