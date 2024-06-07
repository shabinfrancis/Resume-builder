import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";

export default function Header() {

    const MainHeader = styled.header`
      padding: 0 4.8rem;
      height: 10rem;
      background: linear-gradient(#090979, #00d4ff);
    //   background-color: ${({ theme }) => theme.colors.bg};
      display: flex;
      justify-content: space-between;
      align-items: center;

      .logo {
        height: 9.8rem;
      }
    `;
    return (
        <>
            <MainHeader>
                <NavLink to='/' >
                    <img src="https://t3.ftcdn.net/jpg/04/75/01/06/360_F_475010683_QcMoX9EuZkjVToNNtXCDbejMo4tIj06i.jpg" alt="logo" className="logo"/>
                </NavLink>
                <Navbar />
            </MainHeader>

        </>
    )
}