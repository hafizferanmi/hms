import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  outline: 0;
  background-color: #0066f5;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  display: inline-block;
  height: 40px;
  font-size: 15px;
  color: #fff;
  position: relative;
  text-decoration: none;
  padding: 0 1.8em 2.5px;
  transition-duration: .3s;
  text-transform: capitalize;
  transition-property: background-color, opacity, color, transform, box-shadow;
  transition-timing-function: ease-in-out;
  user-select: none;
  transform-style: preserve-3d;
  will-change: background-color, opacity, color, transform, box-shadow;
  box-shadow: 0 2px 4px 0 rgba(10, 46, 101, .08);
`

const Button = ({ label, ...props }) => {
  return (
    <StyledButton {...props}>
      {label}
    </StyledButton>
  )
}

export default Button
