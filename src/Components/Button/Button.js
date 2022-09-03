import React, { Children } from "react";
import styled from "styled-components";
import "./Button.css";
function Button({ title }) {
  const Button = styled.button`
    background: none;
    border: none;
    color: color;
    padding: 8px 20px;
    margin: 0px 8px;
    width: fit-content;
    height: 50px;
    &:hover {
      color: #6181eb;
      background: rgba(97, 129, 235, 0.3);
      border-radius: 6px;
    }
  `;
  const Wrapper = styled.div`
    &:hover {
    }
  `;
  return (
    <Wrapper className="btn-holder">
      <Button>{title}</Button>
    </Wrapper>
  );
}
export default Button;
