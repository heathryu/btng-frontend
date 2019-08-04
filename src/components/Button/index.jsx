import React from 'react'
import {StyledButton} from './index.style'

const Button = ({title = "NO title set", onClick= () =>{}, disabled=false}) => (
    <StyledButton onClick={onClick} disabled={disabled}>{title}</StyledButton>
)

export {Button}