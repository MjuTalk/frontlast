import React, { Component } from 'react'
import {Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink} from "./NavbarElements";
import axios from 'axios';
import $ from 'jquery';
import {} from 'jquery.cookie';
axios.defaults.withCredentials = true;

const Navbar = ({nav1, nav2, nav3, nav4, nav5, nav6, nav7, nav8, nav9, nav10}) => {
  return (
    <>
        <Nav>
            <NavLink to="/home">
                명지톡톡
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/dorm" activeStyle>
                    {nav1}
                </NavLink>
                <NavLink to="/bus" activeStyle>
                    {nav2}
                </NavLink>
                <NavLink to="/dorm/3" activeStyle>
                    {nav3}
                </NavLink>
                <NavLink to="/dorm/4" activeStyle>
                    {nav4}
                </NavLink>
                <NavLink to="/dorm/5" activeStyle>
                    {nav5}
                </NavLink>
                <NavLink to="/dorm/6" activeStyle>
                    {nav6}
                </NavLink>
                <NavLink to="/bus/1" activeStyle>
                    {nav7}
                </NavLink>
                <NavLink to="/bus/2" activeStyle>
                    {nav8}
                </NavLink>
                <NavLink to="/bus/3" activeStyle>
                    {nav9}
                </NavLink>
                <NavLink to="/bus/4" activeStyle>
                    {nav10}
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/">로그아웃</NavBtnLink>
            </NavBtn>
        </Nav>
    </>
  )
}

export default Navbar