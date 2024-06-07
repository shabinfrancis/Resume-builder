import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Button } from "./styles/Button";
import { NavLink } from "react-router-dom";

export default function SignupLoginin() {

    const Wrapper = styled.section`
    
      .container {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: auto;
        background: linear-gradient(#00d4ff, #090979);
        padding-bottom: 30px;
      }

      .heading {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 9px;
        margin-top: 30px;
      }

      .text {
        color: ${({theme}) => theme.colors.white};
        font-size: 48px;
        font-weight: 700;
      }

      .underline {
        width: 60px;
        height: 6px;
        background: ${({theme}) => theme.colors.white};
        border-radius: 9px;
      }

      .inputs {
        margin-top: 55px;
        display: flex;
        flex-direction: column;
        gap: 25px;
      }

      .input {
        display: flex;
        align-items: center;
        margin: auto;
        width: 480px;
        height: 80px;
        border: none;
        outline: none;
        background: #eaeaea;
        font-size: 20px;
        border-radius: 6px;
        padding-left: 19px;
      }

      .submit {
        display: flex;
        gap: 30px;
        margin: 60px auto;
      }

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        height: 50px;
        border-radius: 20px;
        border: 2px solid white;
        cursor: pointer;
        font-weight: 700;

        &:hover,
        &:active {
        color: #fff;
          background: linear-gradient(#097972, #00d4ff);
          transition: color 0.3s linear;
        }
      }

      .gray {
        background: #eaeaea;
        color: #676767;
      }
    `;

    const [action, setAction] = useState("Sign Up")

    return (
        <Wrapper>
            <div className="container">
                <div className="heading">
                    <div className="text">{action}</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    {action === 'Login' ? <div></div> : <input className="input" type="name" placeholder="Username" />}
                    
                    <input className="input" type="email" placeholder="Email" />
                    <input className="input" type="password" placeholder="password" />
                </div>
                <div className="submit">
                    <button className={action === 'Login' ? 'btn gray' : 'btn'} onClick={() => setAction('Sign Up')} type="submit" >
                        Signin
                    </button>
                    <button className={action === 'Sign Up' ? 'btn gray' : 'btn'} onClick={() => setAction('Login')} type="submit" >
                        Login
                    </button>
                </div>

            </div>
        </Wrapper>
    )
}