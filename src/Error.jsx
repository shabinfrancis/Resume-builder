import React from "react";
import styled from "styled-components";
import { Button } from "./styles/Button";
import { NavLink } from "react-router-dom";

const Wrapper = styled.section`

  padding: 10rem 0;
  gap: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`;

export default function Error() {
  return (
    <Wrapper>
        <img src="./public/error.svg" alt="ERROR" />
        <NavLink to='/'>
          <Button className="btn">GO BACK</Button>
        </NavLink>
    </Wrapper>
  )
}