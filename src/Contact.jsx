import React from "react";
import styled from "styled-components";

export default function Contact() {
  const Wrapper = styled.section`
  padding: 10rem 0 10rem 0;
    
  .common-heading {
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.helper};
  }

  .container {
    margin-top: 6rem;
    text-align: center;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

         input[type="submit"] {
            background-color: ${({ theme }) => theme.colors.helper};
            height: 30px;
            border: white;
            border-radius: 5px;
            cursor: pointer;
            transition: all 0.2s;


            &:hover {
              background-color: ${({ theme }) => theme.colors.helper};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.white};
              transform: scale(1.2);
            }
          }
      }
    }
  }
  
  `;
  return (
    <>
      <Wrapper>
        <h2 className="common-heading">Feel free to contact us!</h2>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15126.28620995241!2d73.92422475000001!3d18.59334505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c14df5c70e0d%3A0x2d19689e09e2fced!2sPhoenix%20Mall%20Washrooms!5e0!3m2!1sen!2sin!4v1658905192255!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>

        <div className="container">
          <div className="contact-form">
            <form
              action="https://formspree.io/f/xgedgjkr"
              method="POST"
              className="contact-inputs">
              <input
                style={{height: '30px', borderRadius: '5px'}}
                type="text"
                name="username"
                placeholder="Username"
                autoComplete="off"
                required
              />

              <input
                style={{height: '30px', borderRadius: '5px'}}
                type="email"
                name="Email"
                placeholder="Email"
                autoComplete="off"
                required
              />

              <textarea
                style={{borderRadius: '5px'}}
                name="message"
                cols="30"
                rows="6"
                autoComplete="off"
                required></textarea>

              <input type="submit" value="send" />
            </form>
          </div>
        </div>

      </Wrapper>

    </>
  )
}