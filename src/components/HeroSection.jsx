import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";

export default function HeroSection() {

  const Wrapper = styled.section`
  padding: 9rem 0;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 16rem;
  }

  .heading {
    text-transform: uppercase;
    font-size: 6.4rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .content {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .hero-img {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

    return (
        <>
            <Wrapper>
                <div className="container grid grid-two-column">
                    <div className="section-hero-data">
                        <p className="heading">RESUME MAKING MADE EASIER</p>
                        <p className="content">Just provide the required details and your resume will be ready within seconds!</p>           
                <Button className="btn hireme-btn">
                    <NavLink to='/contact'>
                        Hire Me
                    </NavLink>
                </Button>
                    </div>
                </div>
                <div className="hero-img">
                    <img src="../public/resumeLogo.jpg" alt="" />
                </div>
            </Wrapper>
        </>
    )
}