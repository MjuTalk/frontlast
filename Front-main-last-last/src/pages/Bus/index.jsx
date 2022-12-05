import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import styled from "styled-components"
import BoardModal from "react-modal"
import { BoardProvider } from "../../components/Navbar/Board/BoardContext"
import BoardTemplate from '../../components/Navbar/Board/BoardTemplate'
import BoardHead from '../../components/Navbar/Board/BoardHead'
import CardList from '../../components/Navbar/Board/CardList'
import BoardCreate from '../../components/Navbar/Board/BoardCreate'
import { Close } from "../../image/index.jsx"
import Card from '../../components/Navbar/Board/Card'
import BoardList from '../../components/Navbar/Board/BoardList'
import Navbar2 from '../../components/Navbar/Navbar2'
import Voc from '../Voc/Voc'
import List from '../Voc/List'


const ModalContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 1350px;
  height: 890px;
  background-color: rgb(231, 235, 240);
`

const ModalHead = styled.div`
  width: 1350px;
  height: 100px;
`

const ModalBody = styled.div`
  width: 100%;
  height: 100px;
  position: absolute;
  top: 100px;
`

const Closebtn = styled.img`
  width: 35px;
  height: 35px;
  position: absolute;
  top: 3%;
  right: 3%;
  z-index: 1;
  &:hover {
    cursor: pointer;
  }
`

const BoardListWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  opacity: 0;
  animation: smoothAppear 1.5s forwards;
  animation-delay: 0.5s;
  display: flex;
  flex-direction: column;
  align-items: center;
  .boardList-header {
    color: black;
    font-weight: bold;
    font-size: 2.5rem;
    margin-top: 100px;
  }
  .boardList-body {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
`

const index = ({ isModal, setModal }) => {
  return (
    <div>
      <h1>
        <Navbar
          nav1="기숙사"
          nav2="버스" />
      </h1>
      <div>

        <BoardListWrapper>
          <div className="boardList-header">버스📝</div>
          <div className="boardList-body" />
        </BoardListWrapper>
      </div>
      <div>
        <BoardTemplate>
          <List />
        </BoardTemplate>
      </div>

    </div>
  )
}

export default index